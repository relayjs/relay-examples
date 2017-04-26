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
} from 'react-relay/compat';
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation RemoveCompletedTodosMutation($input: RemoveCompletedTodosInput!) {
    removeCompletedTodos(input: $input) {
      deletedTodoIds,
      viewer {
        completedCount,
        totalCount,
      },
    }
  }
`;

function getConfigs(user) {
  return [{
    type: 'NODE_DELETE',
    parentName: 'viewer',
    parentID: user.id,
    connectionName: 'todos',
    deletedIDFieldName: 'deletedTodoIds',
  }];
}

function getOptimisticResponse(todos, user) {
  let deletedTodoIds;
  let newTotalCount;
  if (todos && todos.edges) {
    deletedTodoIds = todos.edges
      .filter(edge => edge.node.complete)
      .map(edge => edge.node.id);
  }
  const {completedCount, totalCount} = user;
  if (completedCount != null && totalCount != null) {
    newTotalCount = totalCount - completedCount;
  }
  return {
    deletedTodoIds,
    viewer: {
      completedCount: 0,
      id: user.id,
      totalCount: newTotalCount,
    },
  };
}

function commit(
  environment,
  todos,
  user,
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {}
      },
      configs: getConfigs(user),
      optimisticResponse: () => getOptimisticResponse(todos, user),
      updater: (store) => {
        const userProxy = store.get(user.id);
        const conn = ConnectionHandler.getConnection(
          userProxy,
          'TodoList_todos',
        );
        const payload = store.getRootField('removeCompletedTodos');
        const deletedIDs = payload.getValue('deletedTodoIds');
        deletedIDs.forEach((deletedID) =>
          ConnectionHandler.deleteNode(conn, deletedID)
        );
      }
    }
  );
}

export default {commit};
