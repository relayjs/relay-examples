import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';

export default function Issues(props) {
  const data = usePreloadedQuery(graphql`
    query IssueDetailRootQuery($id: ID!) {
      node(id: $id) {
        ... on  Issue {
          title
          number
          author { login }
          body 
          closed
        }
      }
    }
  `, props.prepared.issueDetailQuery);
  const issue = data.node;
  if (issue == null) {
    return "Issue not found";
  }

  return (
    <div>
      #{issue.number} - {issue.title} - {issue.closed ? 'Closed' : 'Open'}
      <div>@{issue.author.login}</div>
      <div><ReactMarkdown source={issue.body} /></div>
    </div>
  );
}