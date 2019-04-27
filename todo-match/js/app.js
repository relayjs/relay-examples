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

import 'todomvc-common';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {QueryRenderer, graphql} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestNode,
  type Variables,
  type NormalizationSplitOperation,
} from 'relay-runtime';

import TodoApp from './components/TodoApp';
import type {appQueryResponse} from 'relay/appQuery.graphql';

import PlainTodoRenderer_value$normalization from '../__generated__/relay/PlainTodoRenderer_value$normalization.graphql';
import BoldTodoRenderer_value$normalization from '../__generated__/relay/BoldTodoRenderer_value$normalization.graphql';

async function fetchQuery(
  operation: RequestNode,
  variables: Variables,
): Promise<{}> {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
}

const modernEnvironment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
  operationLoader: {
    /**
     * Synchronously load an operation, returning either the node or null if it
     * cannot be resolved synchronously.
     */
    get(reference: mixed): ?NormalizationSplitOperation {
      switch (reference) {
        case 'PlainTodoRenderer_value$normalization.graphql':
          return PlainTodoRenderer_value$normalization;
        case 'BoldTodoRenderer_value$normalization.graphql':
          return BoldTodoRenderer_value$normalization;
        default:
          throw new Error(
            `Add get support for operationLoader ${String(reference)}`,
          );
      }
    },

    /**
     * Asynchronously load an operation.
     */
    load(reference: mixed): Promise<?NormalizationSplitOperation> {
      switch (reference) {
        case 'PlainTodoRenderer_value$normalization.graphql':
          return Promise.resolve(PlainTodoRenderer_value$normalization);
        case 'BoldTodoRenderer_value$normalization.graphql':
          return Promise.resolve(BoldTodoRenderer_value$normalization);
        default:
          return Promise.reject(
            new Error(
              `Add load support for operationLoader ${String(reference)}`,
            ),
          );
      }
    },
  },
});

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <QueryRenderer
      environment={modernEnvironment}
      query={graphql`
        query appQuery($userId: String) {
          user(id: $userId) {
            ...TodoApp_user
          }
        }
      `}
      variables={{
        // Mock authenticated ID that matches database
        userId: 'me',
      }}
      render={({error, props}: {error: ?Error, props: ?appQueryResponse}) => {
        if (props && props.user) {
          return <TodoApp user={props.user} />;
        } else if (error) {
          return <div>{error.message}</div>;
        }

        return <div>Loading</div>;
      }}
    />,
    rootElement,
  );
}
