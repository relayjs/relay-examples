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

import * as React from 'react';

type Props = {|
  +className: string,
  +commitOnBlur: boolean,
  +initialValue: string,
  +onCancel: () => void,
  +onDelete: () => void,
  +onSave: string => void,
  +placeholder: string,
|};

type State = {|
  +isEditing: boolean,
  +text: string,
|};

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class TodoTextInput extends React.Component<Props, State> {
  state: State = {
    isEditing: false,
    text: this.props.initialValue || '',
  };
  _inputRef: {current: null | HTMLInputElement} = React.createRef();
  componentDidMount() {
    if (this._inputRef.current) {
      this._inputRef.current.focus();
    }
  }
  _commitChanges = () => {
    const newText = this.state.text.trim();
    if (this.props.onDelete && newText === '') {
      this.props.onDelete();
    } else if (this.props.onCancel && newText === this.props.initialValue) {
      this.props.onCancel();
    } else if (newText !== '') {
      this.props.onSave(newText);
      this.setState({text: ''});
    }
  };
  _handleBlur = () => {
    if (this.props.commitOnBlur) {
      this._commitChanges();
    }
  };
  _handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({text: e.currentTarget.value});
  };
  _handleKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (this.props.onCancel && e.keyCode === ESC_KEY_CODE) {
      this.props.onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this._commitChanges();
    }
  };
  render(): React.Node {
    return (
      <input
        className={this.props.className}
        onBlur={this._handleBlur}
        onChange={this._handleChange}
        onKeyDown={this._handleKeyDown}
        placeholder={this.props.placeholder}
        ref={this._inputRef}
        value={this.state.text}
      />
    );
  }
}
