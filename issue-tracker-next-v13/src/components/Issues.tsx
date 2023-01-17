import { useCallback } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { IssuesFragment$key } from "__generated__/IssuesFragment.graphql";
import Link from "next/link";
import { IssuesPaginationQuery } from "__generated__/IssuesPaginationQuery.graphql";
import styles from "styles/Issues.module.css";

export default function Issues(props: {
  repository: IssuesFragment$key | null;
}) {
  const { data, loadNext, isLoadingNext, refetch } = usePaginationFragment<
    IssuesPaginationQuery,
    IssuesFragment$key
  >(
    graphql`
      fragment IssuesFragment on Repository
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 10 }
        states: { type: "[IssueState!]", defaultValue: OPEN }
      )
      @refetchable(queryName: "IssuesPaginationQuery") {
        issues(after: $cursor, first: $count, states: $states)
          @connection(key: "Issues_issues") {
          edges {
            __id
            node {
              # Compose the data dependencies of child components
              # by spreading their fragments:
              # ...IssuesListItem_issue
              title
              number
              author {
                login
              }
            }
          }
        }
      }
    `,
    props.repository
  );

  // Callback to paginate the issues list
  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) {
      return;
    }
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  return (
    <ul className={styles.issues}>
      {data?.issues.edges?.map((edge) => {
        if (edge == null || edge.node == null) {
          return null;
        }
        return (
          <li key={edge.__id}>
            <Link href={`/issues/${edge.node.number}`}>{edge.node.title}</Link>{" "}
            by {edge.node.author?.login}
          </li>
        );
      })}
      <li>
        <button onClick={loadMore} disabled={isLoadingNext}>
          {isLoadingNext ? "Loading..." : "Load More"}
        </button>
        <button
          onClick={() =>
            refetch({
              count: 20,
            })
          }
        >
          Refetch with 20 items
        </button>
      </li>
    </ul>
  );
}
