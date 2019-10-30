import { createBrowserHistory } from 'history';
import { matchRoutes } from 'react-router-config';

/**
 * A custom router built from the same primitives as react-router. Each object in `routes`
 * contains both a Component and a prepare() function that can preload data for the component.
 * The router watches for changes to the current location via the `history` package, maps the
 * location to the corresponding route entry, and then preloads the code and data for the route.
 */
export default function createRouter(routes, options) {
  // Initialize history
  const history = createBrowserHistory(options);

  // Find the initial match and prepare it
  const initialMatch = matchRoute(routes, history.location);
  const initialPrepared = prepareRoute(initialMatch.route, initialMatch.match);
  let currentEntry = {
    location: history.location,
    match: initialMatch.match,
    prepared: initialPrepared,
    route: initialMatch.route,
  };

  // maintain a set of subscribers to the active entry
  let nextId = 0;
  const subscribers = new Map();

  // Listen for location changes, match to the route entry, prepare the entry,
  // and notify subscribers. Note that this pattern ensures that data-loading
  // occurs *outside* of - and *before* - rendering.
  const cleanup = history.listen((location, action) => {
    if (location.pathname === currentEntry.location.pathname) {
      console.log('history change but same pathname');
      return;
    }
    const matched = matchRoute(routes, location);
    const prepared = prepareRoute(matched.route, matched.match);
    const nextEntry = {
      location,
      match: matched.match,
      prepared,
      route: matched.route,
    };
    currentEntry = nextEntry;
    subscribers.forEach(cb => cb(nextEntry));
  });

  // The actual object that will be passed on the RoutingConext.
  const context = {
    history,
    get() {
      return currentEntry;
    },
    subscribe(cb) {
      const id = nextId++;
      const dispose = () => {
        subscribers.delete(id);
      };
      subscribers.set(id, cb);
      return dispose;
    },
  };

  // Return both the context object and a cleanup function
  return { cleanup, context };
}

/**
 * Match the current location to the corresponding route entry.
 */
function matchRoute(routes, location) {
  const matchedRoutes = matchRoutes(routes, location.pathname);
  if (!Array.isArray(matchedRoutes) || matchedRoutes.length !== 1) {
    throw new Error('No route for ' + location.pathname);
  }
  return matchedRoutes[0];
}

/**
 * Load the data for the matched route, given the params extracted from the route
 */
function prepareRoute(matchedRoute, matchData) {
  const prepared = matchedRoute.prepare(matchData.params);
  const Component = matchedRoute.component.get();
  if (Component == null) {
    matchedRoute.component.load(); // eagerly load
  }
  return prepared;
}
