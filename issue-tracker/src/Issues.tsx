import React, { useCallback } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import IssuesListItem from './IssuesListItem';

import { Issues_repository$key } from './__generated__/Issues_repository.graphql';

interface Props {
  repository: Issues_repository$key;
}

/**
 * Renders a list of issues for a given repository.
 */
const Issues: React.FC<Props> = props => {
  // Given a reference to a repository in props.repository, defines *what*
  // data the component needs about that repository. In this case we fetch
  // the list of issues starting at a given cursor (initially null to start
  // at the beginning of the issues list). See the usePaginationFragment()
  // docs: https://relay.dev/docs/en/experimental/api-reference#usepaginationfragment
  // for more details about how to use this hook to paginate over lists.
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
              # Compose the data dependencies of child components
              # by spreading their fragments:
              ...IssuesListItem_issue
            }
          }
        }
      }
    `,
    props.repository,
  );

  // Callback to paginate the issues list
  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  return (
    <div className="issues">
      {data!.issues.edges!.map(edge => {
        if (edge == null || edge.node == null) return null;

        return (
          <div className="issues-issue" key={edge.__id}>
            {/* Note how we also spread IssuesListItem's fragment above */}
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
};

export default Issues;
