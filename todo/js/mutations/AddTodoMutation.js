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
} from 'react-relay';

import {
  ConnectionHandler,
  type RecordProxy,
  type RecordSourceSelectorProxy,
} from 'relay-runtime';
import type {AddTodoInput} from 'relay/AddTodoMutation.graphql';

const mutation = graphql`
  mutation AddTodoMutation($input: AddTodoInput!) {
    addTodo(input: $input) {
      todoEdge {
        __typename
        cursor
        node {
          complete
          id
          text
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
  userId: string,
  newEdge: RecordProxy,
) {
  const userProxy = store.get(userId);
  if (userProxy == null) return;
  const conn = ConnectionHandler.getConnection(userProxy, 'TodoList_todos');
  if (conn == null) return;
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
  environment: Environment,
  text: string,
  userId: string,
): Disposable {
  const input: AddTodoInput = {
    text,
    userId,
    clientMutationId: `${tempID++}`,
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store: RecordSourceSelectorProxy) => {
      const payload = store.getRootField('addTodo');
      const newEdge = payload?.getLinkedRecord('todoEdge');
      if (newEdge == null) return;
      sharedUpdater(store, userId, newEdge);
    },
    optimisticUpdater: (store: RecordSourceSelectorProxy) => {
      const id = 'client:newTodo:' + tempID++;
      const node = store.create(id, 'Todo');
      node.setValue(text, 'text');
      node.setValue(id, 'id');

      const newEdge = store.create('client:newEdge:' + tempID++, 'TodoEdge');
      newEdge.setLinkedRecord(node, 'node');
      sharedUpdater(store, userId, newEdge);

      // Get the UserProxy, and update the totalCount
      const userProxy = store.get(userId);

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
