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

import type {MarkAllTodosMutation_user$key} from 'relay/MarkAllTodosMutation_user.graphql';
import type {MarkAllTodosMutation_todoEdge$key} from 'relay/MarkAllTodosMutation_todoEdge.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation MarkAllTodosMutation($input: MarkAllTodosInput!) {
    markAllTodos(input: $input) {
      changedTodos {
        id
        complete
      }
      user {
        id
        completedCount
      }
    }
  }
`;

export function useMarkAllTodosMutation(
  userRef: MarkAllTodosMutation_user$key,
  todoEdgeRef: MarkAllTodosMutation_todoEdge$key,
): (boolean) => void {
  const user = useFragment(
    graphql`
      fragment MarkAllTodosMutation_user on User {
        id
        userId
        totalCount
      }
    `,
    userRef,
  );
  const todos = useFragment(
    graphql`
      fragment MarkAllTodosMutation_todoEdge on TodoEdge @relay(plural: true) {
        node {
          id
        }
      }
    `,
    todoEdgeRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(
    (complete: boolean) => {
      commit({
        variables: {
          input: {
            userId: user.userId,
            complete,
          },
        },
        optimisticResponse: {
          markAllTodos: {
            changedTodos: todos.map(({node: {id}}) => ({
              id,
              complete,
            })),
            user: {
              id: user.id,
              completedCount: complete ? user.totalCount : 0,
            },
          },
        },
      });
    },
    [commit, user, todos],
  );
}
