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
  type RecordSourceSelectorProxy,
} from 'react-relay';

import {ConnectionHandler} from 'relay-runtime';
import type {Todo_user} from 'relay/Todo_user.graphql';
import type {Todo_todo} from 'relay/Todo_todo.graphql';
import type {RemoveTodoInput} from 'relay/RemoveTodoMutation.graphql';

const mutation = graphql`
  mutation RemoveTodoMutation($input: RemoveTodoInput!) {
    removeTodo(input: $input) {
      deletedTodoId
      user {
        completedCount
        totalCount
      }
    }
  }
`;

function sharedUpdater(
  store: RecordSourceSelectorProxy,
  user: Todo_user,
  deletedID: string,
) {
  const userProxy = store.get(user.id);
  const conn = ConnectionHandler.getConnection(userProxy, 'TodoList_todos');
  ConnectionHandler.deleteNode(conn, deletedID);
}

function commit(
  environment: Environment,
  todo: Todo_todo,
  user: Todo_user,
): Disposable {
  const input: RemoveTodoInput = {
    id: todo.id,
    userId: user.userId,
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store: RecordSourceSelectorProxy) => {
      const payload = store.getRootField('removeTodo');
      const deletedTodoId = payload.getValue('deletedTodoId');

      if (typeof deletedTodoId !== 'string') {
        throw new Error(
          `Expected removeTodo.deletedTodoId to be string, but got: ${typeof deletedTodoId}`,
        );
      }

      sharedUpdater(store, user, deletedTodoId);
    },
    optimisticUpdater: (store: RecordSourceSelectorProxy) => {
      sharedUpdater(store, user, todo.id);
    },
  });
}

export default {commit};
