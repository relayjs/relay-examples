import {
  Network,
  QueryResponseCache,
  type RequestParameters,
  type Variables,
  type CacheConfig,
} from 'relay-runtime';

import {registerLoader} from '../moduleLoader';

const ONE_MINUTE_IN_MS = 60 * 1000;

export function createNetwork() {
  const responseCache = new QueryResponseCache({
    size: 100,
    ttl: ONE_MINUTE_IN_MS,
  });

  async function fetchResponse(
    operation: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
  ) {
    const {id} = operation;

    const isQuery = operation.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;
    if (isQuery && !forceFetch) {
      const fromCache = responseCache.get(id!, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(id!, variables);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function fetchFn(...args: [any, any, any]) {
    const response = await fetchResponse(...args);

    if (Array.isArray(response.extensions?.modules)) {
      registerModuleLoaders(response.extensions.modules);
    }

    return response;
  }

  const network = Network.create(fetchFn);
  (network as any).responseCache = responseCache;
  return network;
}

export async function networkFetch(id: string, variables: Variables) {
  const response = await fetch(
    `http://localhost:${process.env.PORT ?? 3000}/api/graphql`,
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

function registerModuleLoaders(modules: string[]) {
  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../../components/${module}`));
    }
  });
}
