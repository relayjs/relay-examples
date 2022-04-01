import {registerLoader} from './moduleLoader';

// TODO: think about lifetime of cache entries
let operationResponseCache = {};

export function addToOperationResponseCache(cacheKey, response) {
  operationResponseCache = {...operationResponseCache, [cacheKey]: response};
}

export function getOperationResponseCacheKey(operation, variables) {
  // TODO: stable stringify?
  return `${operation.id}_${JSON.stringify(variables)}`;
}

export function resetOperationResponseCache() {
  operationResponseCache = {};
}

function withPreloaderCache(fetchFn) {
  return function fetchQuery(operation, variables) {
    const cacheKey = getOperationResponseCacheKey(operation, variables);
    const cachedResponse = operationResponseCache[cacheKey];
    if (cachedResponse != null) {
      delete operationResponseCache[cacheKey];
      return Promise.resolve(cachedResponse);
    }
    return fetchFn(operation, variables);
  };
}

function withModuleLoader(fetchFn) {
  return function fetchQuery(...args) {
    return fetchFn(...args).then((response) => {
      if (Array.isArray(response.extensions?.modules)) {
        registerModuleLoaders(response.extensions.modules);
      }
      return response;
    });
  };
}

function registerModuleLoaders(modules) {
  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../components/${module}`));
    }
  });
}

const fetchFunction = withModuleLoader(
  withPreloaderCache((operation, variables) => {
    // TODO: figure out how not to use hardcoded hostname and port
    // TODO: consider bypassing api fetch and directly invoking graphql on server
    return fetch(
      process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:3000/api/graphql',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: operation.id,
          variables,
        }),
      },
    ).then((response) => response.json());
  }),
);

export default fetchFunction;
