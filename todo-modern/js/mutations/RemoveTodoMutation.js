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

const mutation = graphql`
  mutation RemoveTodoMutation($input: RemoveTodoInput!) {
    removeTodo(input: $input) {
      deletedTodoId,
      viewer {
        completedCount,
        totalCount,
      },
    }
  }
`;

function getConfigs(userID) {
  return [{
    type: 'NODE_DELETE',
    parentName: 'viewer',
    parentID: userID,
    connectionName: 'todos',
    deletedIDFieldName: 'deletedTodoId',
  }];
}

function getOptimisticResponse(user, todo) {
  const viewerPayload = {id: user.id};
  if (user.completedCount != null) {
    viewerPayload.completedCount = todo.complete === true ?
      user.completedCount - 1 :
      user.completedCount;
  }
  if (user.totalCount != null) {
    viewerPayload.totalCount = user.totalCount - 1;
  }
  return {
    deletedTodoId: todo.id,
    viewer: viewerPayload,
  };
}

function commit(
  environment,
  todo,
  user,
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {id: todo.id}
      },
      configs: getConfigs(user.id),
      optimisticResponse: () => getOptimisticResponse(user, todo),
    }
  );
}

export default {commit};
