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

import {RelayEnvironmentProvider, loadQuery} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestParameters,
  type Variables,
  type GraphQLResponse,
} from 'relay-runtime';

import {ErrorBoundary} from 'react-error-boundary';
import TodoApp from './components/TodoApp';
import TodoAppQuery from '../__generated__/relay/TodoAppQuery.graphql';

async function fetchQuery(
  params: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return response.json();
}

const modernEnvironment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

const rootElement = document.getElementById('root');

if (rootElement) {
  const queryRef = loadQuery(modernEnvironment, TodoAppQuery, {
    // Mock authenticated ID that matches database
    userId: 'me',
  });
  ReactDOM.render(
    <RelayEnvironmentProvider environment={modernEnvironment}>
      <React.Suspense fallback={<div>Loading</div>}>
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
          <TodoApp queryRef={queryRef} />
        </ErrorBoundary>
      </React.Suspense>
    </RelayEnvironmentProvider>,
    rootElement,
  );
}
