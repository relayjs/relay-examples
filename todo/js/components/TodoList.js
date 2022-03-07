// @flow
import type {TodoList_user$key} from 'relay/TodoList_user.graphql';

import {useAddTodoMutation} from '../mutations/AddTodoMutation';
import {useMarkAllTodosMutation} from '../mutations/MarkAllTodosMutation';
import Todo from './Todo';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';

import * as React from 'react';
import {graphql, useFragment} from 'react-relay';

type Props = {|
  userRef: TodoList_user$key,
|};

export default function TodoList({userRef}: Props): React.Node {
  const user = useFragment(
    graphql`
      fragment TodoList_user on User {
        todos(
          first: 2147483647 # max GraphQLInt
        ) @connection(key: "TodoList_todos") {
          __id
          edges {
            node {
              id
              ...Todo_todo
            }
            ...MarkAllTodosMutation_todoEdge
          }
          ...TodoListFooter_todoConnection
        }
        totalCount
        completedCount
        ...AddTodoMutation_user
        ...MarkAllTodosMutation_user
        ...Todo_user
        ...TodoListFooter_user
      }
    `,
    userRef,
  );

  const commitAddTodoMutation = useAddTodoMutation(user, user.todos.__id);
  const handleOnSave = (text: string) => commitAddTodoMutation(text);

  const commitMarkAllTodosMutation = useMarkAllTodosMutation(
    user,
    user.todos.edges,
  );
  const handleMarkAllChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const complete = e.currentTarget.checked;
    commitMarkAllTodosMutation(complete);
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>

        <TodoTextInput
          className="new-todo"
          onSave={handleOnSave}
          placeholder="What needs to be done?"
        />
      </header>

      <section className="main">
        <input
          checked={user.totalCount === user.completedCount}
          className="toggle-all"
          onChange={handleMarkAllChange}
          type="checkbox"
        />

        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {user.todos.edges.map(({node}) => (
            <Todo
              key={node.id}
              todoRef={node}
              userRef={user}
              todoConnectionId={user.todos.__id}
            />
          ))}
        </ul>
      </section>

      <TodoListFooter userRef={user} todoConnectionRef={user.todos} />
    </>
  );
}
