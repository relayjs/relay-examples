import JSResource from './JSResource';
import { preloadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    path: "/",
    exact: true,
    component: JSResource('HomeRoot', () => import('./HomeRoot')),
    prepare: params => {
      const IssuesQuery = require('./__generated__/HomeRootIssuesQuery.graphql');
      return {
        issuesQuery: preloadQuery(RelayEnvironment, IssuesQuery, {
          owner: 'facebook',
          name: 'relay',
        }, { fetchPolicy: 'store-or-network' }),
      };
    },
  },
  {
    path: "/issue/:id",
    component: JSResource('IssueDetailRoot', () => import('./IssueDetailRoot')),
    prepare: params => {
      const IssueDetailQuery = require('./__generated__/IssueDetailRootQuery.graphql');
      return {
        issueDetailQuery: preloadQuery(RelayEnvironment, IssueDetailQuery, {
          id: params.id,
        }, { fetchPolicy: 'store-or-network' }),
      };
    },
  }
];

export default routes;