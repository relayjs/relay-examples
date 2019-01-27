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

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const PropTypes = require('prop-types');

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class TodoTextInput extends Component {
  static defaultProps = {
    commitOnBlur: false,
  };
  static propTypes = {
    className: PropTypes.string,
    commitOnBlur: PropTypes.bool.isRequired,
    initialValue: PropTypes.string,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };
  state = {
    isEditing: false,
    text: this.props.initialValue || '',
  };
  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }
  _commitChanges = () => {
    const {text} = this.state;
    const {onSave, onCancel, onDelete, initialValue} = this.props;
    const newText = text.trim();
    if (onDelete && newText === '') {
      onDelete();
    } else if (onCancel && newText === initialValue) {
      onCancel();
    } else if (newText !== '') {
      onSave(newText);
      this.setState({text: ''});
    }
  };
  _handleBlur = () => {
    const {commitOnBlur} = this.props;
    if (commitOnBlur) {
      this._commitChanges();
    }
  };
  _handleChange = e => {
    const {
      target: {value},
    } = e;
    this.setState({text: value});
  };
  _handleKeyDown = e => {
    const {onCancel} = this.props;
    if (onCancel && e.keyCode === ESC_KEY_CODE) {
      onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this._commitChanges();
    }
  };
  render() {
    const {text} = this.state;
    const {className, placeholder} = this.props;
    return (
      <input
        className={className}
        onBlur={this._handleBlur}
        onChange={this._handleChange}
        onKeyDown={this._handleKeyDown}
        placeholder={placeholder}
        value={text}
      />
    );
  }
}
