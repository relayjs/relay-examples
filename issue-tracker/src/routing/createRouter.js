import { createBrowserHistory } from 'history';
import { matchRoutes } from 'react-router-config';

export default function createRouter(routes, options) {
  const history = createBrowserHistory(options);
  const initialMatch = matchRoute(routes, history.location);
  const initialPrepared = prepareRoute(initialMatch.route, initialMatch.match);
  const subscribers = new Map();
  let currentEntry = {
    location: history.location,
    match: initialMatch.match,
    prepared: initialPrepared,
    route: initialMatch.route,
  };
  let nextId = 0;

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

  return { cleanup, context };
}

function matchRoute(routes, location) {
  const matchedRoutes = matchRoutes(routes, location.pathname);
  if (!Array.isArray(matchedRoutes) || matchedRoutes.length !== 1) {
    throw new Error('No route for ' + location.pathname);
  }
  return matchedRoutes[0];
}

function prepareRoute(matchedRoute, matchData) {
  const prepared = matchedRoute.prepare(matchData.params);
  const Component = matchedRoute.component.get();
  if (Component == null) {
    matchedRoute.component.load(); // eagerly load
  }
  return prepared;
}
