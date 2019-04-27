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

import React, {useEffect, useRef, useState} from 'react';

type Props = {|
  +className: string,
  +commitOnBlur?: boolean,
  +initialType?: string,
  +initialValue?: string,
  +onCancel?: () => void,
  +onDelete?: () => void,
  +onSave: (text: string, type: string) => void,
  +placeholder?: string,
|};

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

const TodoTextInput = ({
  className,
  commitOnBlur,
  initialValue,
  initialType,
  onCancel,
  onDelete,
  onSave,
  placeholder,
}: Props) => {
  const [text, setText] = useState<string>(initialValue || '');
  const [type, setType] = useState<string>(initialType || 'PLAIN');
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const commitChanges = () => {
    const newText = text.trim();

    if (onDelete && newText === '') {
      onDelete();
    } else if (onCancel && newText === initialValue) {
      onCancel();
    } else if (newText !== '') {
      onSave(newText, type);
      setText('');
      setType(type);
    }
  };

  const handleBlur = () => {
    if (commitOnBlur) {
      commitChanges();
    }
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);

  const handleFormatChange = (e: SyntheticEvent<HTMLInputElement>) =>
    setType(e.currentTarget.value);

  const handleKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (onCancel && e.keyCode === ESC_KEY_CODE) {
      onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      commitChanges();
    }
  };
  const TextInputComponent = (
    <input
      className={className}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      ref={inputRef}
      value={text}
    />
  );
  return (
    <div className="text-input">
      {type === 'BOLD' ? <b>{TextInputComponent} </b> : TextInputComponent}
      <div className="format-picker">
        <input
          type="radio"
          name="todo-format"
          value="PLAIN"
          checked={type === 'PLAIN'}
          onChange={handleFormatChange}
        />
        Plain
        <input
          type="radio"
          name="todo-format"
          value="BOLD"
          checked={type === 'BOLD'}
          onChange={handleFormatChange}
        />
        <b>Bold</b>
      </div>
    </div>
  );
};

export default TodoTextInput;
