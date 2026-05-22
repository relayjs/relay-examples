import type {RenameTodoMutation_todo$key} from '../__generated__/RenameTodoMutation_todo.graphql.ts';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation RenameTodoMutation($input: RenameTodoInput!) @catch {
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
): (text: string) => void {
  const todo = useFragment(
    graphql`
      fragment RenameTodoMutation_todo on Todo @throwOnFieldError {
        id
      }
    `,
    todoRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(
    (text: string) => {
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
    },
    [commit, todo],
  );
}
