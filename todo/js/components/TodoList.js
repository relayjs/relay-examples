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

import MarkAllTodosMutation from '../mutations/MarkAllTodosMutation';
import Todo from './Todo';

import React from 'react';
import {createFragmentContainer, graphql, type RelayProp} from 'react-relay';
import type {TodoList_user} from 'relay/TodoList_user.graphql';
type Todos = $NonMaybeType<$ElementType<TodoList_user, 'todos'>>;
type Edges = $NonMaybeType<$ElementType<Todos, 'edges'>>;
type Edge = $NonMaybeType<$ElementType<Edges, number>>;
type Node = $NonMaybeType<$ElementType<Edge, 'node'>>;

type Props = {|
  +relay: RelayProp,
  +user: TodoList_user,
|};

class TodoList extends React.Component<Props> {
  _handleMarkAllChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const complete = e.currentTarget.checked;

    if (this.props.user.todos) {
      MarkAllTodosMutation.commit(
        this.props.relay.environment,
        complete,
        this.props.user.todos,
        this.props.user,
      );
    }
  };
  renderTodos() {
    const {todos} = this.props.user;

    const nodes: $ReadOnlyArray<Node> =
      todos && todos.edges
        ? todos.edges
            .filter(Boolean)
            .map((edge: Edge) => edge.node)
            .filter(Boolean)
        : [];

    return nodes.map((node: Node) => (
      <Todo key={node.id} todo={node} user={this.props.user} />
    ));
  }
  render() {
    const {totalCount, completedCount} = this.props.user;

    return (
      <section className="main">
        <input
          checked={totalCount === completedCount}
          className="toggle-all"
          onChange={this._handleMarkAllChange}
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{this.renderTodos()}</ul>
      </section>
    );
  }
}

export default createFragmentContainer(TodoList, {
  user: graphql`
    fragment TodoList_user on User {
      todos(
        first: 2147483647 # max GraphQLInt
      ) @connection(key: "TodoList_todos") {
        edges {
          node {
            id
            complete
            ...Todo_todo
          }
        }
      }
      id
      userId
      totalCount
      completedCount
      ...Todo_user
    }
  `,
});
