import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePaginationFragment } from 'react-relay/hooks';
import IssuesListItem from './IssuesListItem';

const { useCallback } = React;

export default function Issues(props) {
  const { data, loadNext, isLoadingNext } = usePaginationFragment(
    graphql`
      fragment Issues_repository on Repository
        @argumentDefinitions(
          cursor: { type: "String" }
          count: { type: "Int", defaultValue: 10 }
          states: { type: "[IssueState!]", defaultValue: ["OPEN"] }
        )
        @refetchable(queryName: "IssuesPaginationQuery") {
        issues(after: $cursor, first: $count, states: $states)
          @connection(key: "Issues_issues") {
          edges {
            __id
            node {
              ...IssuesListItem_issue
            }
          }
        }
      }
    `,
    props.repository,
  );

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  return (
    <div className="issues">
      {data.issues.edges.map(edge => {
        if (edge == null || edge.node == null) {
          return null;
        }
        return (
          <div className="issues-issue" key={edge.__id}>
            <IssuesListItem issue={edge.node} />
          </div>
        );
      })}
      <button
        name="load more issues"
        type="button"
        className="issues-load-more"
        onClick={loadMore}
      >
        Load More
      </button>
    </div>
  );
}
