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

import AddTodoMutation from '../mutations/AddTodoMutation';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';

import React from 'react';
import {useRelayEnvironment, useLazyLoadQuery, graphql} from 'react-relay';
import type {TodoAppQuery} from 'relay/TodoAppQuery.graphql';

export default function TodoApp(): React$Node {
  const environment = useRelayEnvironment();
  const {user} = useLazyLoadQuery<TodoAppQuery>(
    graphql`
      query TodoAppQuery($userId: String) {
        user(id: $userId) {
          id
          totalCount
          ...TodoListFooter_user
          ...TodoList_user
        }
      }
    `,
    {userId: 'me'},
  );

  if (user == null) return <div>Loading</div>;

  const handleTextInputSave = (text: string) => {
    AddTodoMutation.commit(environment, text, user.id);
    return;
  };

  const hasTodos = user.totalCount > 0;

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <TodoTextInput
            className="new-todo"
            onSave={handleTextInputSave}
            placeholder="What needs to be done?"
          />
        </header>

        <TodoList user={user} />
        {hasTodos && <TodoListFooter user={user} />}
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>

        <p>
          Created by the{' '}
          <a href="https://facebook.github.io/relay/">Relay team</a>
        </p>

        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}
