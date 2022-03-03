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

import type {EntryPoint} from 'react-relay';
import typeof TodoApp from '../components/TodoApp';

import JSResource from '../utilities/JSResource';
import TodoAppQuery from '../../__generated__/relay/TodoAppQuery.graphql';

type Params = {|userId: string|};

const TodoAppEntryPoint: EntryPoint<Params, TodoApp> = {
  getPreloadProps({userId}: Params) {
    return {
      queries: {
        todoAppQueryRef: {
          parameters: {
            kind: 'PreloadableConcreteRequest',
            params: TodoAppQuery.params,
          },
          variables: {
            userId,
          },
        },
      },
    };
  },
  root: JSResource<TodoApp>(
    'TodoApp',
    () =>
      ((import(
        /* webpackPrefetch: true */ '../components/TodoApp.js'
      ): $FlowFixMe): Promise<TodoApp>),
  ),
};

export default TodoAppEntryPoint;
