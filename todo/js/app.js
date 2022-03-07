// @flow
import 'todomvc-common';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {
  EntryPointContainer,
  RelayEnvironmentProvider,
  loadEntryPoint,
} from 'react-relay';
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
import TodoAppEntryPoint from './entrypoints/TodoApp.entrypoint';

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
      queryId: params.id,
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
  const entryPointRef = loadEntryPoint(
    {getEnvironment: () => modernEnvironment},
    TodoAppEntryPoint,
    {
      // Mock authenticated ID that matches database
      userId: 'me',
    },
  );
  ReactDOM.render(
    <RelayEnvironmentProvider environment={modernEnvironment}>
      <React.Suspense fallback={<div>Loading</div>}>
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
          <EntryPointContainer entryPointReference={entryPointRef} props={{}} />
        </ErrorBoundary>
      </React.Suspense>
    </RelayEnvironmentProvider>,
    rootElement,
  );
}
