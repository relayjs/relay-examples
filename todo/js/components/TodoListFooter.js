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

import React, {Component} from 'react';
import {graphql, createFragmentContainer} from 'react-relay';

class TodoListFooter extends Component {
  _handleRemoveCompletedTodosClick = () => {
    const {
      viewer,
      viewer: {
        todos: {edges: todoEdges},
      },
      relay: {environment},
    } = this.props;
    const edges = todoEdges.filter(({node: {complete}}) => complete === true);
    RemoveCompletedTodosMutation.commit(
      environment,
      {
        edges,
      },
      viewer,
    );
  };
  render() {
    const {
      viewer: {completedCount: numCompletedTodos, totalCount},
    } = this.props;
    const numRemainingTodos = totalCount - numCompletedTodos;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{numRemainingTodos}</strong> item
          {numRemainingTodos === 1 ? '' : 's'} left
        </span>
        {numCompletedTodos > 0 && (
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

export default createFragmentContainer(
  TodoListFooter,
  graphql`
    fragment TodoListFooter_viewer on User {
      id
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
);
