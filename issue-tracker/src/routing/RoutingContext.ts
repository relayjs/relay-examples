import React from 'react';
import createRouter from './createRouter';

type Context = ReturnType<typeof createRouter>['context'];
const RoutingContext = React.createContext<Context | null>(null);

/**
 * A custom context instance for our router type
 */
export default RoutingContext;
