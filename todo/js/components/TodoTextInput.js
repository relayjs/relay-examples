// @flow
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';

type Props = {|
  +className: string,
  +commitOnBlur?: boolean,
  +initialValue?: string,
  +onCancel?: () => void,
  +onDelete?: () => void,
  +onSave: (string) => void,
  +placeholder?: string,
|};

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

const TodoTextInput = ({
  className,
  commitOnBlur,
  initialValue,
  onCancel,
  onDelete,
  onSave,
  placeholder,
}: Props): React$Element<'input'> => {
  const [text, setText] = useState<string>(initialValue || '');
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
      onSave(newText);
      setText('');
    }
  };

  const handleBlur = () => {
    if (commitOnBlur) {
      commitChanges();
    }
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);

  const handleKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (onCancel && e.keyCode === ESC_KEY_CODE) {
      onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      commitChanges();
    }
  };

  return (
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
};

export default TodoTextInput;
