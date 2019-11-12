import { preloadQuery } from 'react-relay/hooks'

import JSResource from './JSResource'
import RelayEnvironment from './RelayEnvironment'
import { RouteConfig } from './routing/createRouter'

import PreloadRootQuery, { RootQuery } from './__generated__/RootQuery.graphql'
import PreloadIssuesQuery, {
  HomeRootIssuesQuery,
} from './__generated__/HomeRootIssuesQuery.graphql'
import PreloadIssueDetailRootQuery, {
  IssueDetailRootQuery,
} from './__generated__/IssueDetailRootQuery.graphql'

const routes: RouteConfig[] = [
  {
    component: JSResource('Root', () => import('./Root')),
    prepare: () => ({
      rootQuery: preloadQuery<RootQuery>(
        RelayEnvironment,
        PreloadRootQuery,
        {
          owner: 'facebook',
          name: 'relay',
        },
        // The fetchPolicy allows us to specify whether to render from cached
        // data if possible (store-or-network) or only fetch from network
        // (network-only).
        { fetchPolicy: 'store-or-network' },
      ),
    }),
    routes: [
      {
        path: '/',
        exact: true,
        /**
         * A lazy reference to the component for the home route. Note that we intentionally don't
         * use React.lazy here: that would start loading the component only when it's rendered.
         * By using a custom alternative we can start loading the code instantly. This is
         * especially useful with nested routes, where React.lazy would not fetch the
         * component until its parents code/data had loaded. Nested route support isn't
         * implemented in our mini-router yet, but one can imagine iterating over all
         * the matched route entries and calling .load() on each of their components.
         */
        component: JSResource('HomeRoot', () => import('./HomeRoot')),
        /**
         * A function to prepare the data for the `component` in parallel with loading
         * that component code. The actual data to fetch is defined by the component
         * itself - here we just reference a description of the data - the generated
         * query.
         */
        prepare: () => ({
          issuesQuery: preloadQuery<HomeRootIssuesQuery>(
            RelayEnvironment,
            PreloadIssuesQuery,
            {
              owner: 'facebook',
              name: 'relay',
            },
            // The fetchPolicy allows us to specify whether to render from cached
            // data if possible (store-or-network) or only fetch from network
            // (network-only).
            { fetchPolicy: 'store-or-network' },
          ),
        }),
      },
      {
        path: '/issue/:id',
        component: JSResource('IssueDetailRoot', () =>
          import('./IssueDetailRoot'),
        ),
        prepare: params => ({
          issueDetailQuery: preloadQuery<IssueDetailRootQuery>(
            RelayEnvironment,
            PreloadIssueDetailRootQuery,
            {
              id: params.id,
            },
            { fetchPolicy: 'store-or-network' },
          ),
        }),
      },
    ],
  },
]

export default routes
