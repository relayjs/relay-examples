import React from 'react';
import { History, Location } from 'history';
import { match } from 'react-router';
import { Resource } from '../JSResource';
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';

export type PreparedQuery = {
  [queryName: string]: PreloadedQuery<any>;
};

export interface Route {
  location: Location;
  entries: Entry[];
}

export interface GenericRouteComponentProps extends Entry {
  children?: JSX.Element;
}
export type GenericRouteComponent = (
  props: GenericRouteComponentProps,
) => JSX.Element;

export interface Entry {
  component?: Resource<GenericRouteComponent>;
  prepared: PreparedQuery;
  routeData: match<{}>;
}

export interface Router {
  history: History<any>;
  get: () => Route;
  preloadCode: (pathname: string) => void;
  preload: (pathname: string) => void;
  subscribe: (callback: (arg: Route) => void) => () => void;
}

const RoutingContext = React.createContext<Router | null>(null);

/**
 * A custom context instance for our router type
 */
export default RoutingContext;
