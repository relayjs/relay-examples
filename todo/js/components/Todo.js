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
import RenameTodoMutation from '../mutations/RenameTodoMutation';
import TodoTextInput from './TodoTextInput';

import React, {Component} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import classnames from 'classnames';

class Todo extends Component {
  state = {
    isEditing: false,
  };
  _handleCompleteChange = e => {
    const {
      target: {checked: complete},
    } = e;
    const {
      todo,
      viewer,
      relay: {environment},
    } = this.props;
    ChangeTodoStatusMutation.commit(environment, complete, todo, viewer);
  };
  _handleDestroyClick = () => {
    this._removeTodo();
  };
  _handleLabelDoubleClick = () => {
    this._setEditMode(true);
  };
  _handleTextInputCancel = () => {
    this._setEditMode(false);
  };
  _handleTextInputDelete = () => {
    this._setEditMode(false);
    this._removeTodo();
  };
  _handleTextInputSave = text => {
    const {
      todo,
      relay: {environment},
    } = this.props;
    this._setEditMode(false);
    RenameTodoMutation.commit(environment, text, todo);
  };
  _removeTodo() {
    const {
      relay: {environment},
      todo,
      viewer,
    } = this.props;
    RemoveTodoMutation.commit(environment, todo, viewer);
  }
  _setEditMode = shouldEdit => {
    this.setState({isEditing: shouldEdit});
  };
  renderTextInput(todoText) {
    return (
      <TodoTextInput
        className="edit"
        commitOnBlur={true}
        initialValue={todoText}
        onCancel={this._handleTextInputCancel}
        onDelete={this._handleTextInputDelete}
        onSave={this._handleTextInputSave}
      />
    );
  }
  render() {
    const {
      todo: {complete: todoCompleted, text: todoText},
    } = this.props;
    const {isEditing} = this.state;
    return (
      <li
        className={classnames({
          completed: todoCompleted,
          editing: isEditing,
        })}>
        <div className="view">
          <input
            checked={todoCompleted}
            className="toggle"
            onChange={this._handleCompleteChange}
            type="checkbox"
          />
          <label onDoubleClick={this._handleLabelDoubleClick}>{todoText}</label>
          <button className="destroy" onClick={this._handleDestroyClick} />
        </div>
        {isEditing && this.renderTextInput(todoText)}
      </li>
    );
  }
}

export default createFragmentContainer(Todo, {
  todo: graphql`
    fragment Todo_todo on Todo {
      complete
      id
      text
    }
  `,
  viewer: graphql`
    fragment Todo_viewer on User {
      id
      totalCount
      completedCount
    }
  `,
});
