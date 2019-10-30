import React from 'react';
import RoutingContext from './RoutingContext';
import ErrorBoundary from '../ErrorBoundary';
import './RouteRenderer.css';

const { useContext, useEffect, useTransition, Suspense, useState } = React;

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

export default function RouterRenderer() {
  const router = useContext(RoutingContext);
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);
  const [routeEntry, setRouteEntry] = useState(router.get());
  useEffect(() => {
    // check if the route has changed since rendering
    const currentEntry = router.get();
    if (currentEntry !== routeEntry) {
      // if there was a concurrent modification, rerender and exit
      setRouteEntry(currentEntry);
      return;
    }
    // if we committed with the latest state, set up a subscription to listen
    // for route changes
    const dispose = router.subscribe(nextEntry => {
      startTransition(() => {
        setRouteEntry(nextEntry);
      });
    });
    return () => dispose();
    // Note: this hook updates routeEntry manually; we exclude it from the hook deps
    // to avoid recomputing the effect after each change triggered by the effect itself
    // eslint-disable-next-line
  }, [router, startTransition]);
  return (
    <ErrorBoundary>
      <Suspense fallback={'Loading fallback...'}>
        {isPending ? (
          <div className="RouteRenderer-pending">Loading pending...</div>
        ) : null}
        <RouteComponent
          component={routeEntry.route.component}
          route={routeEntry.match}
          prepared={routeEntry.prepared}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

function RouteComponent(props) {
  const Component = props.component.read();
  const { route, prepared } = props;
  return <Component route={route} prepared={prepared} />;
}
