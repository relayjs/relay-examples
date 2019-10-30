import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';

/**
 * The root component for the issue detail route.
 */
export default function IssueDetailRoot(props) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.issueDetailQuery - see src/routes.js
  const { repository, node: issue } = usePreloadedQuery(
    graphql`
      query IssueDetailRootQuery($id: ID!, $owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          owner {
            login
          }
          name
        }
        node(id: $id) {
          ... on Issue {
            title
            number
            author {
              login
            }
            body
            closed
          }
        }
      }
    `,
    props.prepared.issueDetailQuery,
  );
  if (issue == null) {
    return 'Issue not found';
  }

  return (
    <div className="root">
      <header className="header">
        {repository.owner.login}/{repository.name}: Issues
      </header>
      <section className="content">
        <div className="issue">
          <div className="issue-title">
            #{issue.number} - {issue.title} - {issue.closed ? 'Closed' : 'Open'}
          </div>
          <div className="issue-author">@{issue.author.login}</div>
          <div className="issue-body">
            <ReactMarkdown source={issue.body} />
          </div>
        </div>
      </section>
    </div>
  );
}
