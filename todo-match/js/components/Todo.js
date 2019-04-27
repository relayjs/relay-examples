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

import ChangeTodoStatusMutation from '../mutations/ChangeTodoStatusMutation';
import RemoveTodoMutation from '../mutations/RemoveTodoMutation';

import React from 'react';
import {createFragmentContainer, graphql, type RelayProp} from 'react-relay';
import classnames from 'classnames';
import type {Todo_todo} from 'relay/Todo_todo.graphql';
import type {Todo_user} from 'relay/Todo_user.graphql';
import MatchContainer from './MatchContainer';

type Props = {|
  +relay: RelayProp,
  +todo: Todo_todo,
  +user: Todo_user,
|};

const Todo = ({relay, todo, user}: Props) => {
  const handleCompleteChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const complete = e.currentTarget.checked;
    ChangeTodoStatusMutation.commit(relay.environment, complete, todo, user);
  };

  const handleDestroyClick = () => removeTodo();

  const removeTodo = () =>
    RemoveTodoMutation.commit(relay.environment, todo, user);

  return (
    <li
      className={classnames({
        completed: todo.complete,
      })}>
      <div className="view">
        <input
          checked={todo.complete}
          className="toggle"
          onChange={handleCompleteChange}
          type="checkbox"
        />

        {todo.content && (
          <MatchContainer match={todo.content} fallback={'Loading...'} />
        )}
        <button className="destroy" onClick={handleDestroyClick} />
      </div>
    </li>
  );
};

export default createFragmentContainer(Todo, {
  todo: graphql`
    fragment Todo_todo on Todo {
      complete
      id
      content @match {
        ...PlainTodoRenderer_value @module(name: "PlainTodoRenderer.react")
        ...BoldTodoRenderer_value @module(name: "BoldTodoRenderer.react")
      }
    }
  `,
  user: graphql`
    fragment Todo_user on User {
      id
      userId
      totalCount
      completedCount
    }
  `,
});
