import {ReactRelayContext, useRelayEnvironment} from 'react-relay';
import {Suspense, useMemo} from 'react';

import {createEnvironment} from './environment';

export function ReactRelayContainer({Component, props}) {
  const environment = useMemo(() => createEnvironment(), []);
  return (
    <ReactRelayContext.Provider value={{environment}}>
      <Suspense fallback={null}>
        <Hyderate Component={Component} props={props} />
      </Suspense>
    </ReactRelayContext.Provider>
  );
}

function Hyderate({Component, props}) {
  const environment = useRelayEnvironment();

  const transformedProps = useMemo(() => {
    if (props == null) {
      return props;
    }
    const {preloadedQueries, ...otherProps} = props;
    if (preloadedQueries == null) {
      return props;
    }

    const queryRefs = {};
    for (const [queryName, {params, variables, response}] of Object.entries(
      preloadedQueries,
    )) {
      environment
        .getNetwork()
        .responseCache.set(params.id, variables, response);
      // TODO: create using a function exported from react-relay package
      queryRefs[queryName] = {
        environment,
        fetchKey: params.id,
        fetchPolicy: 'store-or-network',
        isDisposed: false,
        name: params.name,
        kind: 'PreloadedQuery',
        variables,
      };
    }

    return {...otherProps, queryRefs};
  }, [props]);

  return <Component {...transformedProps} />;
}
