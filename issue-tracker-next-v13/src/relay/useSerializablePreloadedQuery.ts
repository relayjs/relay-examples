// Convert preloaded query object (with raw GraphQL Response) into
// Relay's PreloadedQuery.

import { useMemo } from "react";
import { PreloadedQuery, PreloadFetchPolicy } from "react-relay";
import { ConcreteRequest, Environment, OperationType } from "relay-runtime";
import { getCacheByEnvironment } from "./environment";
import { SerializablePreloadedQuery } from "./loadSerializableQuery";

// This hook convert serializable preloaded query
// into Relay's PreloadedQuery object.
// It is also writes this serializable preloaded query
// into QueryResponseCache, so we the network layer
// can use these cache results when fetching data
// in `usePreloadedQuery`.
export default function useSerializablePreloadedQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
>(
  environment: Environment,
  preloadQuery: SerializablePreloadedQuery<TRequest, TQuery>,
  fetchPolicy: PreloadFetchPolicy = "store-or-network"
): PreloadedQuery<TQuery> {
  useMemo(() => {
    writePreloadedQueryToCache(preloadQuery, environment);
  }, [preloadQuery]);

  return {
    environment,
    fetchKey: preloadQuery.params.id ?? preloadQuery.params.cacheID,
    fetchPolicy,
    isDisposed: false,
    name: preloadQuery.params.name,
    kind: "PreloadedQuery",
    variables: preloadQuery.variables,
    dispose: () => {
      return;
    },
  };
}

function writePreloadedQueryToCache<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
>(
  preloadedQueryObject: SerializablePreloadedQuery<TRequest, TQuery>,
  environment: Environment
) {
  const cacheKey =
    preloadedQueryObject.params.id ?? preloadedQueryObject.params.cacheID;
  const responseCache = getCacheByEnvironment(environment);

  responseCache?.set(
    cacheKey,
    preloadedQueryObject.variables,
    preloadedQueryObject.response
  );
}
