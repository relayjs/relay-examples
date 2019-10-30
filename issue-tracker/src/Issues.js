import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePaginationFragment } from 'react-relay/hooks';
import Link from './routing/Link';

const { useCallback } = React;

export default function Issues(props) {
  const { data, loadNext, isLoadingNext } = usePaginationFragment(graphql`
    fragment Issues_repository on Repository @argumentDefinitions(
      cursor: {type: "String"}
      count: {type: "Int", defaultValue: 10}
      states: {type: "[IssueState!]", defaultValue: ["OPEN"]}
    ) @refetchable(queryName: "IssuesPaginationQuery") {
      issues(after: $cursor, first: $count, states: $states) @connection(key: "Issues_issues") {
        edges {
          __id  
          node {
            id
            title
          }
        }
      }
    }
  `, props.repository);

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  return (
    <div className="issues">
      {data.issues.edges.map(edge => (
        <div className="issues-issue" key={edge.__id}><Link to={`/issue/${edge.node.id}`}>{edge.node.title}</Link></div>
      ))}
      <button className="issues-load-more" onClick={loadMore}>Load More</button>
    </div>
  );
}