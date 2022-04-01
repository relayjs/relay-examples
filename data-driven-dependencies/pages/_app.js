import '../styles/globals.css';
import React, {useMemo} from 'react';
import {ReactRelayContext, loadQuery} from 'react-relay';
import {Layout} from '../components/LayoutComponents';

import fetchQuery, {
  getOperationResponseCacheKey,
  addToOperationResponseCache,
  resetOperationResponseCache,
} from '../lib/fetchQuery';
import {getEnvironment} from '../lib/relay';

const IS_SERVER = typeof window === typeof undefined;

export default function RelayApp({
  Component,
  environment,
  pageProps,
  componentProps,
  requestProps,
}) {
  // For initial request and transitions to pages that export `getServerSideProps`,
  // `RelayApp.getInitialProps` isn't invoked on the client and props are sent over the wire.
  // So we always create an environment (or use a previously created and cached one) on the client.
  environment = useMemo(() => (IS_SERVER ? environment : getEnvironment()), []);

  React.useEffect(() => {
    if (IS_SERVER) {
      throw new Error('useEffect unexpectedly invoked on server');
    }

    Object.entries(requestProps.preloadedQueryResults ?? {}).forEach(
      ([cacheKey, response]) => {
        addToOperationResponseCache(cacheKey, response);
      },
    );

    // Adjusting preloaded queries to be consumable in the `usePreloadedQuery`.
    // `preloadedQuery` is the return value of the `loadQuery` function. But
    // we cannot use these results directly in the Next.js (as these are not serializable)
    // for that we're creating a `SerializedPreloadedQuery` object, and adjusting it to look
    // like the result of the `loadQuery` with the correct environment
    Object.entries(componentProps.queryRefs ?? {}).forEach(
      ([_, preloadedQuery]) => {
        if (preloadedQuery.kind == 'SerializedPreloadedQuery') {
          preloadedQuery.kind = 'PreloadedQuery';
          preloadedQuery.environment = environment;
        }
      },
    );

    // TODO: think about when to resetOperationResponseCache
    return resetOperationResponseCache;
  }, [requestProps, componentProps]);

  return (
    <ReactRelayContext.Provider value={{environment}}>
      <React.Suspense fallback={null}>
        <Layout>
          <Component {...pageProps} {...componentProps} />
        </Layout>
      </React.Suspense>
    </ReactRelayContext.Provider>
  );
}

RelayApp.getInitialProps = async function ({Component, ctx}) {
  const environment = getEnvironment();

  const componentProps = {};
  const requestProps = {};

  // Component represents a page with relay preloading enabled
  if (Component.getRelayPreloadProps) {
    const {queries} = Component.getRelayPreloadProps(ctx);

    // preload query results on the server and flush them with requestProps
    requestProps.preloadedQueryResults = Object.fromEntries(
      await Promise.all(
        Object.values(queries).map(async ({params, variables}) => {
          return new Promise(async (resolve) => {
            resolve([
              getOperationResponseCacheKey(params, variables),
              await fetchQuery(params, variables),
            ]);
          });
        }),
      ),
    );

    // TODO: look into retain and dispose behavior on the client
    componentProps.queryRefs = Object.fromEntries(
      Object.entries(queries).map(([name, {params, variables}]) => {
        return [
          name,
          {
            kind: 'SerializedPreloadedQuery',
            environment,
            id: getOperationResponseCacheKey(params, variables),
            isDisposed: false,
            name: params.name,
            variables,
          },
        ];
      }),
    );
  }

  return {environment, componentProps, requestProps};
};
