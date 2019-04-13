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

import React, {useState} from 'react';
import {createFragmentContainer, graphql, type RelayProp} from 'react-relay';
import type {PlainTodoRenderer_value} from 'relay/PlainTodoRenderer_value.graphql';
import UpdatePlainContentDataMutation from '../mutations/UpdatePlainContentDataMutation';
import TodoTextInput from './TodoTextInput';

type Props = {|
  +relay: RelayProp,
  +value: PlainTodoRenderer_value,
|};

const PlainTodoRenderer = (props: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleLabelDoubleClick = () => setIsEditing(true);
  const handleTextInputCancel = () => setIsEditing(false);
  const handleTextInputSave = (text: string, id: string) => {
    setIsEditing(false);
    UpdatePlainContentDataMutation.commit(props.relay.environment, text, id);
  };

  return !isEditing ? (
    <label onDoubleClick={handleLabelDoubleClick}>
      {props.value.data ? props.value.data.plainText : ''}
    </label>
  ) : (
    <TodoTextInput
      className="edit"
      commitOnBlur={true}
      initialValue={
        props.value.data && props.value.data.plainText
          ? props.value.data.plainText
          : 'not found'
      }
      initialType={'PLAIN'}
      onCancel={handleTextInputCancel}
      onSave={(text: string) =>
        handleTextInputSave(
          text,
          props.value.data && props.value.data.id ? props.value.data.id : '',
        )
      }
    />
  );
};

export default createFragmentContainer(PlainTodoRenderer, {
  value: graphql`
    fragment PlainTodoRenderer_value on PlainContent {
      data {
        id
        plainText
      }
    }
  `,
});
