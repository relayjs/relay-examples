import type {TodoListFooter_todoConnection$key} from '../__generated__/TodoListFooter_todoConnection.graphql.ts';
import type {TodoListFooter_user$key} from '../__generated__/TodoListFooter_user.graphql.ts';

import {useRemoveCompletedTodosMutation} from '../mutations/RemoveCompletedTodosMutation.ts';

import {graphql, useFragment} from 'react-relay';

type Props = {
  todoConnectionRef: TodoListFooter_todoConnection$key;
  userRef: TodoListFooter_user$key;
};

export default function TodoListFooter({userRef, todoConnectionRef}: Props) {
  const user = useFragment(
    graphql`
      fragment TodoListFooter_user on User @throwOnFieldError {
        totalCount
        completedCount
        ...RemoveCompletedTodosMutation_user
      }
    `,
    userRef,
  );
  const todoConnection = useFragment(
    graphql`
      fragment TodoListFooter_todoConnection on TodoConnection @throwOnFieldError {
        ...RemoveCompletedTodosMutation_todoConnection
      }
    `,
    todoConnectionRef,
  );

  const commitRemoveCompletedTodosMutation = useRemoveCompletedTodosMutation(
    user,
    todoConnection,
  );

  const numRemainingTodos = user.totalCount - user.completedCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numRemainingTodos}</strong> item
        {numRemainingTodos === 1 ? '' : 's'} left
      </span>

      {user.completedCount > 0 && (
        <button
          className="clear-completed"
          onClick={commitRemoveCompletedTodosMutation}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
