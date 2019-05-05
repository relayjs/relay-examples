// @flow
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {
  commitMutation,
  graphql,
  type Disposable,
  type Environment,
  type RecordProxy,
  type RecordSourceSelectorProxy,
} from 'react-relay';

import {ConnectionHandler} from 'relay-runtime';
import type {TodoApp_user} from 'relay/TodoApp_user.graphql';
import type {AddPlainTodoInput} from 'relay/AddPlainTodoMutation.graphql';

const mutation = graphql`
  mutation AddPlainTodoMutation($input: AddPlainTodoInput!) {
    addPlainTodo(input: $input) {
      todoEdge {
        __typename
        cursor
        node {
          __typename
          id
          complete
          ...Todo_todo @module(name: "Todo")
        }
      }
      user {
        id
        totalCount
      }
    }
  }
`;

function sharedUpdater(
  store: RecordSourceSelectorProxy,
  user: TodoApp_user,
  newEdge: RecordProxy,
) {
  const userProxy = store.get(user.id);
  const conn = ConnectionHandler.getConnection(userProxy, 'TodoList_todos');
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
  environment: Environment,
  text: string,
  user: TodoApp_user,
): Disposable {
  const input: AddPlainTodoInput = {
    text,
    userId: user.userId,
    clientMutationId: `${tempID++}`,
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store: RecordSourceSelectorProxy) => {
      const payload = store.getRootField('addPlainTodo');
      const newEdge = payload.getLinkedRecord('todoEdge');
      sharedUpdater(store, user, newEdge);
    },
    optimisticUpdater: (store: RecordSourceSelectorProxy) => {
      const plainContentDataId = 'client:newPlainContentData:' + tempID++;
      const plainContentData = store.create(
        plainContentDataId,
        'PlainContentData',
      );
      plainContentData.setValue(text, 'plainText');
      plainContentData.setValue(plainContentDataId, 'id');

      const plainContentId = 'client:newPlainContent:' + tempID++;
      const plainContent = store.create(plainContentId, 'PlainContent');
      plainContent.setValue('PlainTodoRenderer', '__module_component');
      plainContent.setValue(
        'PlainTodoRenderer_value$normalization.graphql',
        '__module_operation',
      );
      plainContent.setLinkedRecord(plainContentData, 'data');

      const id = 'client:newPlainTodo:' + tempID++;
      const node = store.create(id, 'Todo');
      node.setValue(id, 'id');
      node.setValue(false, 'complete');
      node.setValue('Todo', '__module_component');
      node.setValue('Todo_todo$normalization.graphql', '__module_operation');
      node.setLinkedRecord(plainContent, 'content');

      const newEdge = store.create('client:newEdge:' + tempID++, 'TodoEdge');
      newEdge.setLinkedRecord(node, 'node');
      sharedUpdater(store, user, newEdge);

      // Get the UserProxy, and update the totalCount
      const userProxy = store.get(user.id);

      if (!userProxy) {
        throw new Error('Failed to retrieve userProxy from store');
      }

      const totalCount = userProxy.getValue('totalCount');

      if (typeof totalCount !== 'number') {
        throw new Error(
          `Expected userProxy.totalCount to be number, but got: ${typeof totalCount}`,
        );
      }

      userProxy.setValue(totalCount + 1, 'totalCount');
    },
  });
}

export default {commit};
