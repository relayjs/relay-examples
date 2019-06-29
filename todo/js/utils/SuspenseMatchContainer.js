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

type Match = {|
  +$fragmentRefs: mixed,
  +__fragmentPropName?: ?string,
  +__module_component?: ?string,
|};
type Props = {|
  +fallback: Node,
  getProps: (match: Match) => mixed,
  +match: Match,
|};

const SuspenseMatchContainer = ({match, fallback, getProps}: Props) => {
  return match ? (
    <React.Suspense fallback={fallback}>
      {React.createElement(
        React.lazy(() =>
          import(
            /* webpackChunkName: "[request]" */ `../components/${match.__module_component}`
          ),
        ),
        // $FlowFixMe TODO: property key,ref is missing in call of getProps [1] but exists in React key [1]
        getProps(match),
      )}
    </React.Suspense>
  ) : null;
};

export default SuspenseMatchContainer;
