import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';
import SuspenseImage from './SuspenseImage';
import IssueDetailComments from './IssueDetailComments';
import IssueActions from './IssueActions';

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
      <div className="issue-comment">
        <SuspenseImage
          className="issue-comment-author-image"
          title={`${issue.author.login}'s avatar`}
          src={issue.author.avatarUrl}
        />
        <div className="issue-comment-author-name">{issue.author.login}</div>
        <div className="issue-comment-body">
          <ReactMarkdown
            source={issue.body}
            renderers={{ image: SuspenseImage }}
          />
        </div>
      </div>
      <IssueDetailComments issue={issue} />
      <IssueActions issue={issue} />
    </div>
  );
}
