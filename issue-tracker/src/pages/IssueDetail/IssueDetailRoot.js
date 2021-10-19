import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import IssueActions from './IssueActions';
import IssueDetailComment from './IssueDetailComment';
import IssueDetailComments from './IssueDetailComments';

/**
 * The root component for the issue detail route.
 */
export default function IssueDetailRoot(props) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.issueDetailQuery - see src/routes.js
  const { node: issue } = usePreloadedQuery(
    graphql`
      query IssueDetailRootQuery($id: ID!) {
        node(id: $id) {
          ... on Issue {
            title
            number
            author {
              login
              avatarUrl
            }
            body
            closed
            url
            ...IssueDetailComments_issue
            ...IssueActions_issue
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
    <div className="issue">
      <div className="issue-title">
        #{issue.number} - {issue.title} - {issue.closed ? 'Closed' : 'Open'}
        <a
          className="issue-title-github-link"
          href={issue.url}
          title="Issue on GitHub"
        >
          View on GitHub
        </a>
      </div>
      {/** The author's comment is divided from comment list */}
      <IssueDetailComment comment={issue} />

      <IssueDetailComments issue={issue} />
      <IssueActions issue={issue} />
    </div>
  );
}
