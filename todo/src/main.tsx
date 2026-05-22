import 'todomvc-common';

import {createRoot} from 'react-dom/client';
import {Suspense} from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import type {RequestParameters, Variables, GraphQLResponse} from 'relay-runtime';

import {ErrorBoundary} from 'react-error-boundary';
import TodoApp from './components/TodoApp.tsx';
import TodoAppQueryNode, {type TodoAppQuery} from './__generated__/TodoAppQuery.graphql.ts';

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

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

const queryRef = loadQuery<TodoAppQuery>(environment, TodoAppQueryNode, {
  userId: 'me',
});

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<div>Loading</div>}>
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
          <TodoApp queryRef={queryRef} />
        </ErrorBoundary>
      </Suspense>
    </RelayEnvironmentProvider>,
  );
}
