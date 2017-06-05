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
} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation AddTodoMutation($input: AddTodoInput!) {
    addTodo(input:$input) {
      todoEdge {
        __typename
        cursor
        node {
          complete
          id
          text
        }
      }
      viewer {
        id
        totalCount
      }
    }
  }
`;

function sharedUpdater(store, user, newEdge) {
  const userProxy = store.get(user.id);
  const conn = ConnectionHandler.getConnection(
    userProxy,
    'TodoList_todos',
  );
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
  environment,
  text,
  user
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          text,
          clientMutationId: tempID++,
        },
      },
      updater: (store) => {
        const payload = store.getRootField('addTodo');
        const newEdge = payload.getLinkedRecord('todoEdge');
        sharedUpdater(store, user, newEdge);
      },
      optimisticUpdater: (store) => {
        const id = 'client:newTodo:' + tempID++;
        const node = store.create(id, 'Todo');
        node.setValue(text, 'text');
        node.setValue(id, 'id');
        const newEdge = store.create(
          'client:newEdge:' + tempID++,
          'TodoEdge',
        );
        newEdge.setLinkedRecord(node, 'node');
        sharedUpdater(store, user, newEdge);
        const userProxy = store.get(user.id);
        userProxy.setValue(
          userProxy.getValue('totalCount') + 1,
          'totalCount',
        );
      },
    }
  );
}

export default {commit};
