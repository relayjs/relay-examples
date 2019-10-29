import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { matchRoutes } from 'react-router-config';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import RelayEnvironment from './RelayEnvironment';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
import { recycleNodesInto } from 'relay-runtime';

const { Suspense, useMemo, useState, useTransition } = React;

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

function AppRouter() {
  const location = useStableLocation();
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);
  const [activeLocation, setActiveLocation] = useState(location);
  if (location !== activeLocation) {
    startTransition(() => {
      setActiveLocation(location)
    });
  }
  const result = useMemo(() => {
    const matchedRoutes = matchRoutes(routes, activeLocation.pathname);
    if (!Array.isArray(matchedRoutes) || matchedRoutes.length !== 1) {
      throw new Error(`Unknown route '${activeLocation.pathname}'`);
    }
    const { route: matchedRoute, match: matchData } = matchedRoutes[0];
    const prepared = matchedRoute.prepare(matchData.params);
    const Component = matchedRoute.component.get();
    if (Component == null) {
      matchedRoute.component.load(); // eagerly load
      return <LazyComponent route={matchData} prepared={prepared} component={matchedRoute.component} />;
    } else {
      return <Component route={matchData} prepared={prepared} />;
    }
  }, [activeLocation]);
  return (
    <ErrorBoundary>
      <Suspense fallback={"Loading..."}>
        {isPending ? <div>Loading...</div> : null}
        {result}
      </Suspense>
    </ErrorBoundary >
  );
}

function LazyComponent(props) {
  const Component = props.component.read();
  return <Component route={props.matchData} prepared={props.prepared} />;
}

function useStableLocation() {
  const nextLocation = useLocation();
  const [currentLocation, setLocation] = useState(nextLocation);
  const recyledLocation = recycleNodesInto(currentLocation, nextLocation);
  if (recyledLocation !== currentLocation) {
    setLocation(nextLocation);
  }
  return currentLocation;
}

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </RelayEnvironmentProvider >,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
