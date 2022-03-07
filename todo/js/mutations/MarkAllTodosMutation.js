// @flow
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
