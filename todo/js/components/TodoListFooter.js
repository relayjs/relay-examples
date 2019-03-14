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
import {graphql, createFragmentContainer, type RelayProp} from 'react-relay';
import type {TodoListFooter_user} from 'relay/TodoListFooter_user.graphql';
type Todos = $NonMaybeType<$ElementType<TodoListFooter_user, 'todos'>>;
type Edges = $NonMaybeType<$ElementType<Todos, 'edges'>>;
type Edge = $NonMaybeType<$ElementType<Edges, number>>;

type Props = {|
  +relay: RelayProp,
  +user: TodoListFooter_user,
|};

class TodoListFooter extends React.Component<Props> {
  _handleRemoveCompletedTodosClick = () => {
    const {todos} = this.props.user;

    const completedEdges: $ReadOnlyArray<?Edge> =
      todos && todos.edges
        ? todos.edges.filter(
            (edge: ?Edge) => edge && edge.node && edge.node.complete,
          )
        : [];

    RemoveCompletedTodosMutation.commit(
      this.props.relay.environment,
      {
        edges: completedEdges,
      },
      this.props.user,
    );
  };
  render() {
    const {completedCount} = this.props.user;
    const numRemainingTodos = this.props.user.totalCount - completedCount;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{numRemainingTodos}</strong> item
          {numRemainingTodos === 1 ? '' : 's'} left
        </span>
        {completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={this._handleRemoveCompletedTodosClick}>
            Clear completed
          </button>
        )}
      </footer>
    );
  }
}

export default createFragmentContainer(TodoListFooter, {
  user: graphql`
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
});
