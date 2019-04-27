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

import React, {type Node} from 'react';
import type {
  PlainTodoRenderer_value$ref,
  BoldTodoRenderer_value$ref,
} from 'relay/Todo_todo.graphql';

type Props = {|
  +fallback: Node,
  +match: {|
    +$fragmentRefs: PlainTodoRenderer_value$ref & BoldTodoRenderer_value$ref,
    +__fragmentPropName?: ?string,
    +__module_component?: ?string,
  |},
|};

const PlainTodoRenderer = React.lazy(() =>
  import(/* webpackChunkName: "PlainTodoRenderer" */ './PlainTodoRenderer'),
);
const BoldTodoRenderer = React.lazy(() =>
  import(/* webpackChunkName: "BoldTodoRenderer" */ './BoldTodoRenderer'),
);

const MatchContainer = ({match, fallback}: Props) => {
  switch (match.__module_component) {
    case 'BoldTodoRenderer.react':
      return (
        <React.Suspense fallback={fallback}>
          <BoldTodoRenderer value={match} />
        </React.Suspense>
      );
    case 'PlainTodoRenderer.react':
      return (
        <React.Suspense fallback={fallback}>
          <PlainTodoRenderer value={match} />
        </React.Suspense>
      );
    default:
      return 'Nothing matched...';
  }
};

export default MatchContainer;
