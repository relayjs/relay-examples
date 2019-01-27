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

import React, {Component} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

class TodoList extends Component {
  _handleMarkAllChange = e => {
    const {
      target: {checked: complete},
    } = e;
    const {
      viewer,
      viewer: {todos},
      relay: {environment},
    } = this.props;

    MarkAllTodosMutation.commit(environment, complete, todos, viewer);
  };
  renderTodos() {
    const {
      viewer,
      viewer: {
        todos: {edges},
      },
    } = this.props;
    return edges.map(({node, node: {id: nodeId}}) => (
      <Todo key={nodeId} todo={node} viewer={viewer} />
    ));
  }
  render() {
    const {
      viewer: {totalCount: numTodos, completedCount: numCompletedTodos},
    } = this.props;

    return (
      <section className="main">
        <input
          checked={numTodos === numCompletedTodos}
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
  viewer: graphql`
    fragment TodoList_viewer on User {
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
      totalCount
      completedCount
      ...Todo_viewer
    }
  `,
});
