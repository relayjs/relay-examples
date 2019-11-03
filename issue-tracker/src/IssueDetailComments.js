import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePaginationFragment } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';
import SuspenseImage from './SuspenseImage';

const { useCallback, useTransition, Suspense, SuspenseList } = React;

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

/**
 * Renders a list of comments for a given issue.
 */
export default function IssueDetailComments(props) {
  // Given a reference to an issue in props.issue, defines *what*
  // data the component needs about that repository. In this case we fetch
  // the list of comments starting at a given cursor (initially null to start
  // at the beginning of the issues list). See the usePaginationFragment()
  // docs: https://relay.dev/docs/en/experimental/api-reference#usepaginationfragment
  // for more details about how to use this hook to paginate over lists.
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    graphql`
      fragment IssueDetailComments_issue on Issue
        @argumentDefinitions(
          cursor: { type: "String" }
          count: { type: "Int", defaultValue: 10 }
        )
        @refetchable(queryName: "IssueDetailCommentsQuery") {
        comments(after: $cursor, first: $count)
          @connection(key: "IssueDetailComments_comments") {
          edges {
            __id
            node {
              id
              author {
                login
                avatarUrl
              }
              body
            }
          }
        }
      }
    `,
    props.issue,
  );
  // Individual comments may suspend while any images are loading (for the
  // author avatar or content within the comment body). Using `useTransition()`
  // allows us to continue showing existing comments while the next page of
  // results is still loading in the background.
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);

  // Callback to paginate the issues list
  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) {
      return;
    }
    startTransition(() => {
      loadNext(10);
    });
  }, [isLoadingNext, loadNext, startTransition]);

  const comments = data.comments.edges;
  if (comments == null || comments.length === 0) {
    return <div className="issue-no-comments">No comments</div>;
  }

  // Per above, individual comments may suspend while images load. Using <SuspenseList>
  // allows us to render comments as they are ready, while avoiding showing them out of
  // order, as could happen if images for a later comment resolved before images for
  // an earlier comment.
  return (
    <>
      <SuspenseList revealOrder="forwards">
        {comments.map(edge => {
          if (edge == null || edge.node == null) {
            return null;
          }
          const comment = edge.node;
          return (
            // Wrap each comment in a separate suspense fallback to allow them to commit
            // individually; SuspenseList ensures they'll reveal in-order.
            <Suspense fallback={null} key={edge.__id}>
              <div className="issue-comment">
                <SuspenseImage
                  className="issue-comment-author-image"
                  title={`${comment.author.login}'s avatar`}
                  src={comment.author.avatarUrl}
                />
                <div className="issue-comment-author-name">
                  {comment.author.login}
                </div>
                <div className="issue-comment-body">
                  <ReactMarkdown
                    source={comment.body}
                    renderers={{ image: SuspenseImage }}
                  />
                </div>
              </div>
            </Suspense>
          );
        })}
      </SuspenseList>
      {hasNext ? (
        <button
          name="load more comments"
          type="button"
          className="issue-comments-load-more"
          onClick={loadMore}
          disabled={isPending || isLoadingNext}
        >
          {isPending || isLoadingNext ? 'Loading...' : 'Load More'}
        </button>
      ) : null}
    </>
  );
}
