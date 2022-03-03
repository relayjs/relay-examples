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

import type {RenameTodoMutation_todo$key} from 'relay/RenameTodoMutation_todo.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation RenameTodoMutation($input: RenameTodoInput!) {
    renameTodo(input: $input) {
      todo {
        id
        text
      }
    }
  }
`;

export function useRenameTodoMutation(
  todoRef: RenameTodoMutation_todo$key,
): (string) => void {
  const todo = useFragment(
    graphql`
      fragment RenameTodoMutation_todo on Todo {
        id
        text
      }
    `,
    todoRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback((text: string) => {
    const payload = {
      id: todo.id,
      text,
    };
    commit({
      variables: {
        input: payload,
      },
      optimisticResponse: {
        renameTodo: {
          todo: payload,
        },
      },
    });
  });
}
