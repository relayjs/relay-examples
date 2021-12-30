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

import {ConnectionHandler, type RecordSourceSelectorProxy} from 'relay-runtime';
import type {RemoveCompletedTodosInput} from 'relay/RemoveCompletedTodosMutation.graphql';

import type {TodoListFooter_user} from 'relay/TodoListFooter_user.graphql';
type Todos = $NonMaybeType<$ElementType<TodoListFooter_user, 'todos'>>;
type Edges = $NonMaybeType<$ElementType<Todos, 'edges'>>;
type Edge = $NonMaybeType<$ElementType<Edges, number>>;
type Node = $NonMaybeType<$ElementType<Edge, 'node'>>;

const mutation = graphql`
  mutation RemoveCompletedTodosMutation($input: RemoveCompletedTodosInput!) {
    removeCompletedTodos(input: $input) {
      deletedTodoIds
      user {
        completedCount
        totalCount
      }
    }
  }
`;

function sharedUpdater(
  store: RecordSourceSelectorProxy,
  user: TodoListFooter_user,
  deletedIDs: $ReadOnlyArray<string>,
) {
  const userProxy = store.get(user.id);
  if (userProxy != null) {
    const conn = ConnectionHandler.getConnection(userProxy, 'TodoList_todos');
    if (conn != null) {
      // Purposefully type forEach as void, to toss the result of deleteNode
      deletedIDs.forEach((deletedID: string): void =>
        ConnectionHandler.deleteNode(conn, deletedID),
      );
    }
  }
}

function commit(
  environment: Environment,
  todos: Todos,
  user: TodoListFooter_user,
): Disposable {
  const input: RemoveCompletedTodosInput = {
    userId: user.userId,
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store: RecordSourceSelectorProxy) => {
      const payload = store.getRootField('removeCompletedTodos');
      const deletedIds = payload?.getValue('deletedTodoIds');

      // $FlowFixMe `payload.getValue` returns mixed, not sure how to check refinement to $ReadOnlyArray<string>
      sharedUpdater(store, user, deletedIds);
    },
    optimisticUpdater: (store: RecordSourceSelectorProxy) => {
      // Relay returns Maybe types a lot of times in a connection that we need to cater for
      const completedNodeIds: $ReadOnlyArray<string> = todos.edges
        ? todos.edges
            .filter(Boolean)
            .map((edge: Edge): ?Node => edge.node)
            .filter(Boolean)
            .filter((node: Node): boolean => node.complete)
            .map((node: Node): string => node.id)
        : [];

      sharedUpdater(store, user, completedNodeIds);
    },
  });
}

export default {commit};
