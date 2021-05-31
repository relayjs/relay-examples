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

import RemoveCompletedTodosMutation from '../mutations/RemoveCompletedTodosMutation';

import React from 'react';
import {graphql, useFragment, useRelayEnvironment} from 'react-relay';
import type {
  TodoListFooter_user$key,
  TodoListFooter_user,
} from 'relay/TodoListFooter_user.graphql';
type Todos = $NonMaybeType<$ElementType<TodoListFooter_user, 'todos'>>;
type Edges = $NonMaybeType<$ElementType<Todos, 'edges'>>;
type Edge = $NonMaybeType<$ElementType<Edges, number>>;

type Props = {|
  +user: TodoListFooter_user$key,
|};

export default function TodoListFooter(props: Props): React$Node {
  const environment = useRelayEnvironment();
  const user = useFragment(
    graphql`
      fragment TodoListFooter_user on User {
        id
        userId
        completedCount
        todos(
          first: 2147483647 # max GraphQLInt
        ) @connection(key: "TodoList_todos") {
          edges {
            node {
              id
              complete
            }
          }
        }
        totalCount
      }
    `,
    props.user,
  );

  const {todos, completedCount, totalCount} = user;

  let completedEdges =
    todos?.edges?.filter((edge: ?Edge) => edge?.node?.complete) ?? [];

  const handleRemoveCompletedTodosClick = () => {
    RemoveCompletedTodosMutation.commit(
      environment,
      {
        edges: completedEdges,
      },
      user,
    );
  };

  const numRemainingTodos = totalCount - completedCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numRemainingTodos}</strong> item
        {numRemainingTodos === 1 ? '' : 's'} left
      </span>

      {completedCount > 0 && (
        <button
          className="clear-completed"
          onClick={handleRemoveCompletedTodosClick}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
