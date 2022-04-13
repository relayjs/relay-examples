import {Network, QueryResponseCache} from 'relay-runtime';

import {registerLoader} from '../moduleLoader';

const ONE_MINUTE_IN_MS = 60 * 1000;

export function createNetwork() {
  const responseCache = new QueryResponseCache({
    size: 100,
    ttl: ONE_MINUTE_IN_MS,
  });

  async function fetchResponse(operation, variables, cacheConfig) {
    const {id} = operation;

    const isQuery = operation.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;
    if (isQuery && !forceFetch) {
      const fromCache = responseCache.get(id, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(id, variables);
  }

  async function fetchFn(...args) {
    const response = await fetchResponse(...args);

    if (Array.isArray(response.extensions?.modules)) {
      registerModuleLoaders(response.extensions.modules);
    }

    return response;
  }

  const network = Network.create(fetchFn);
  network.responseCache = responseCache;
  return network;
}

export async function networkFetch(id, variables) {
  const response = await fetch(
    // TODO: figure out how not to use hardcoded hostname and port
    // TODO: consider bypassing api fetch and directly invoking graphql on server
    process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:3000/api/graphql',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        variables,
      }),
    },
  );
  return response.json();
}

function registerModuleLoaders(modules) {
  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../../components/${module}`));
    }
  });
}
