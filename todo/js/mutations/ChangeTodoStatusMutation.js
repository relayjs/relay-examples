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

import type {ChangeTodoStatusMutation_todo$key} from 'relay/ChangeTodoStatusMutation_todo.graphql';
import type {ChangeTodoStatusMutation_user$key} from 'relay/ChangeTodoStatusMutation_user.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
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

export function useChangeTodoStatusMutation(
  userRef: ChangeTodoStatusMutation_user$key,
  todoRef: ChangeTodoStatusMutation_todo$key,
): (boolean) => void {
  const user = useFragment(
    graphql`
      fragment ChangeTodoStatusMutation_user on User {
        id
        userId
        completedCount
      }
    `,
    userRef,
  );
  const todo = useFragment(
    graphql`
      fragment ChangeTodoStatusMutation_todo on Todo {
        id
      }
    `,
    todoRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(
    (complete: boolean) => {
      const payload = {
        id: todo.id,
        complete,
      };
      commit({
        variables: {
          input: {
            userId: user.userId,
            ...payload,
          },
        },
        optimisticResponse: {
          changeTodoStatus: {
            todo: payload,
            user: {
              id: user.id,
              completedCount: user.completedCount + (complete ? 1 : -1),
            },
          },
        },
      });
    },
    [user, todo, commit],
  );
}
