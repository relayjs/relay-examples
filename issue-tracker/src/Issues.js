import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePaginationFragment } from 'react-relay/hooks';
import { Link } from 'react-router-dom';

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
    <div>
      {data.issues.edges.map(edge => (
        <div><Link to={`/issue/${edge.node.id}`}>{edge.node.title}</Link></div>
      ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}