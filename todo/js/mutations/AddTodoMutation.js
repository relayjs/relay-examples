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

import type {AddTodoMutation_user$key} from 'relay/AddTodoMutation_user.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation AddTodoMutation($connections: [ID!]!, $input: AddTodoInput!) {
    addTodo(input: $input) {
      todoEdge @appendEdge(connections: $connections) {
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

let tempID = 0;

export function useAddTodoMutation(
  userRef: AddTodoMutation_user$key,
  todoConnectionId: string,
): (string) => void {
  const user = useFragment(
    graphql`
      fragment AddTodoMutation_user on User {
        userId
        id
        totalCount
      }
    `,
    userRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(
    (text: string) => {
      commit({
        variables: {
          input: {
            text,
            userId: user.userId,
          },
          connections: [todoConnectionId],
        },
        optimisticResponse: {
          addTodo: {
            todoEdge: {
              node: {
                id: 'client:newTodo:' + tempID++,
                text,
                complete: false,
              },
            },
            user: {
              id: user.id,
              totalCount: user.totalCount + 1,
            },
          },
        },
      });
    },
    [commit, user, todoConnectionId],
  );
}
