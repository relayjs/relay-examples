// @flow
import type {Todo_todo$key} from 'relay/Todo_todo.graphql';
import type {Todo_user$key} from 'relay/Todo_user.graphql';

import {useChangeTodoStatusMutation} from '../mutations/ChangeTodoStatusMutation';
import {useRenameTodoMutation} from '../mutations/RenameTodoMutation';
import {useRemoveTodoMutation} from '../mutations/RemoveTodoMutation';
import TodoTextInput from './TodoTextInput';

import * as React from 'react';
import {useState} from 'react';
import {graphql, useFragment} from 'react-relay';
import classnames from 'classnames';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

type Props = {|
  todoConnectionId: string,
  todoRef: Todo_todo$key,
  userRef: Todo_user$key,
|};

export default function Todo({
  userRef,
  todoRef,
  todoConnectionId,
}: Props): React$Element<'li'> {
  const todo = useFragment(
    graphql`
      fragment Todo_todo on Todo {
        id
        text
        complete
      }
    `,
    todoRef,
  );

  const user = useFragment(
    graphql`
      fragment Todo_user on User {
        ...ChangeTodoStatusMutation_user
        ...RemoveTodoMutation_user
      }
    `,
    userRef,
  );

  return (
    <li
      className={classnames({
        completed: todo.complete,
        editing: false,
      })}>
      <div className="view">
        <input checked={todo.complete} className="toggle" type="checkbox" />

        <label>{todo.text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
}
