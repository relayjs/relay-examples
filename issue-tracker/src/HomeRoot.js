import { usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import Issues from './Issues';
import React from 'react';

/**
 * The root component for the home route.
 */
export default function HomeRoot(props) {
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

  return <Issues repository={repository} />;
}
