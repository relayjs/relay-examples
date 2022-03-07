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
        complete
        text
        ...ChangeTodoStatusMutation_todo
        ...RenameTodoMutation_todo
        ...RemoveTodoMutation_todo
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

  const commitChangeTodoStatusMutation = useChangeTodoStatusMutation(
    user,
    todo,
  );
  const handleCompleteChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const complete = e.currentTarget.checked;
    commitChangeTodoStatusMutation(complete);
  };

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleLabelDoubleClick = () => setIsEditing(true);
  const handleTextInputCancel = () => setIsEditing(false);
  const commitRenameTodoMutation = useRenameTodoMutation(todo);
  const handleTextInputSave = (text: string) => {
    setIsEditing(false);
    commitRenameTodoMutation(text);
  };

  const commitRemoveTodoMutation = useRemoveTodoMutation(
    user,
    todo,
    todoConnectionId,
  );
  const handleRemoveTodo = () => {
    commitRemoveTodoMutation();
  };
  const handleTextInputDelete = () => {
    setIsEditing(false);
    handleRemoveTodo();
  };

  return (
    <li
      className={classnames({
        completed: todo.complete,
        editing: isEditing,
      })}>
      <div className="view">
        <input
          checked={todo.complete}
          className="toggle"
          onChange={handleCompleteChange}
          type="checkbox"
        />

        <label onDoubleClick={handleLabelDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={handleRemoveTodo} />
      </div>

      {isEditing && (
        <TodoTextInput
          className="edit"
          commitOnBlur={true}
          initialValue={todo.text}
          onCancel={handleTextInputCancel}
          onDelete={handleTextInputDelete}
          onSave={handleTextInputSave}
        />
      )}
    </li>
  );
}
