import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';

export default function Root(props) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.issuesQuery - see src/routes.js
  const data = usePreloadedQuery(
    graphql`
      query RootQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          owner {
            login
          }
          name
        }
      }
    `,
    props.prepared.rootQuery,
  );
  const { repository } = data;

  return (
    <div className="root">
      <header className="header">
        {repository.owner.login}/{repository.name}: Issues
      </header>
      <section className="content">{props.children}</section>
    </div>
  );
}
