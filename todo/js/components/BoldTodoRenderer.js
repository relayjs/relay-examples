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
import type {BoldTodoRenderer_value} from 'relay/BoldTodoRenderer_value.graphql';
import UpdateBoldContentDataMutation from '../mutations/UpdateBoldContentDataMutation';
import TodoTextInput from './TodoTextInput';

type Props = {|
  +relay: RelayProp,
  +value: BoldTodoRenderer_value,
|};

const BoldTodoRenderer = (props: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleLabelDoubleClick = () => setIsEditing(true);
  const handleTextInputCancel = () => setIsEditing(false);
  const handleTextInputSave = (text: string, id: string) => {
    setIsEditing(false);
    UpdateBoldContentDataMutation.commit(props.relay.environment, text, id);
  };

  return !isEditing ? (
    <label onDoubleClick={handleLabelDoubleClick}>
      <b>{props.value.data ? props.value.data.boldText : ''}</b>
    </label>
  ) : (
    <TodoTextInput
      className="edit"
      commitOnBlur={true}
      initialValue={
        props.value.data && props.value.data.boldText
          ? props.value.data.boldText
          : 'not found'
      }
      initialType={'BOLD'}
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

export default createFragmentContainer(BoldTodoRenderer, {
  value: graphql`
    fragment BoldTodoRenderer_value on BoldContent {
      data {
        id
        boldText
      }
    }
  `,
});
