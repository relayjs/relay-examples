import { usePreloadedQuery } from 'react-relay/hooks';
import { graphql } from 'babel-plugin-relay/macro';
import Issues from './Issues';
import React from 'react';
import { HomeRootIssuesQuery } from './__generated__/HomeRootIssuesQuery.graphql';
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';

/**
 * The root component for the home route.
 */

interface Props {
  // TODO: think about type safety arond this. Currently this name is set in the route config
  prepared: {
    issuesQuery: PreloadedQuery<HomeRootIssuesQuery>;
  };
}

const HomeRoot: React.FC<Props> = props => {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.issuesQuery - see src/routes.js
  const data = usePreloadedQuery(
    graphql`
      query HomeRootIssuesQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          # Compose the data dependencies of child components
          # by spreading their fragments:
          ...Issues_repository
        }
      }
    `,
    props.prepared.issuesQuery,
  );

  const { repository } = data;

  if (!repository) {
    return null;
  }

  return <Issues repository={repository} />;
};

export default HomeRoot;
