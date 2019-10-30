import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import Link from './routing/Link';

export default function IssuesListItem(props) {
  console.log(props.issue);
  const issue = useFragment(
    graphql`
      fragment IssuesListItem_issue on Issue {
        id
        title
      }
    `,
    props.issue,
  );

  return <Link to={`/issue/${issue.id}`}>{issue.title}</Link>;
}
