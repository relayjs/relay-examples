import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment, useRelayEnvironment } from 'react-relay/hooks';
import { commitMutation, ConnectionHandler } from 'relay-runtime';

const { useCallback, useState, useEffect, useRef } = React;

const AddCommentMutation = graphql`
  mutation IssueActionsAddCommentMutation($input: AddCommentInput!) {
    addComment(input: $input) {
      subject {
        id
      }
      commentEdge {
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
`;

export default function IssueActions(props) {
  // Get the active Relay environment; developers should always prefer to use the environment
  // from context rather than a singleton, as this keeps the app flexible. For example, this
  // allows you to render part of a UI in a different environment.
  const environment = useRelayEnvironment();

  // Track the current comment text - this is used as the value of the comment textarea
  const [commentText, setCommentText] = useState('');

  // We want to avoid sending multiple requests in parallel. Using state to guard against this
  // isn't reliable in concurrent mode, as state updates are batched. We therefore keep call
  // both a ref (pendingMutationRef) and state (isPending). The ref ensures we know for sure
  // if a mutation is pending, while the state is a (slightly) delayed representation that is
  // displayed to the user.
  //
  // NOTE: this is a pattern that you'd typically push to a shared infrastructure. Relay Hooks
  // doesn't currently have a `useMutation()` hook - yet! - but when it does, it would implement
  // a pattern like the one here, so product developers don't have to think about it.
  const [isPending, setPending] = useState(false);
  const pendingMutationRef = useRef(null);

  // Get the data we need about the issue in order to execute the mutation. Right now that's just
  // the id, but in the future this component might neeed more information.
  const data = useFragment(
    graphql`
      fragment IssueActions_issue on Issue {
        id
      }
    `,
    props.issue,
  );
  const issueId = data.id;

  // Callback to handle edits to the comment text
  const onChange = useCallback(
    event => {
      setCommentText(event.target.value);
    },
    [setCommentText],
  );

  // Form submit callback
  const onSubmit = useCallback(
    event => {
      event.preventDefault();

      // If there's already a mutation pending bail out
      if (pendingMutationRef.current != null) {
        return;
      }
      // Run the mutation
      const request = commitMutation(environment, {
        mutation: AddCommentMutation,
        variables: {
          input: {
            body: commentText,
            subjectId: issueId,
          },
        },
        /**
         * Relay merges data from the mutation result based on each response object's `id` value.
         * In this case, however, we also want to add the new comment to the list of issues: Relay
         * doesn't magically know where addComment.commentEdge should be added into the data graph.
         * So we define an `updater` function to imperatively update thee store.
         */
        updater: store => {
          // Get a reference to the issue
          const issue = store.get(issueId);
          if (issue == null) {
            return;
          }
          // Get the list of comments using the same 'key' value as defined in
          // IssueDetailComments
          const comments = ConnectionHandler.getConnection(
            issue,
            'IssueDetailComments_comments', // See IssueDetailsComments @connection
          );
          if (comments == null) {
            return;
          }
          // Insert the edge at the end of the list
          ConnectionHandler.insertEdgeAfter(
            comments,
            store.getRootField('addComment').getLinkedRecord('commentEdge'),
            null, // we can specify a cursor value here to insert the new edge after that  cursor
          );
        },
        onCompleted: () => {
          // When the mutation completes immediately clear the ref
          pendingMutationRef.current = null;
          // And also update state - note that this will be slightly delayed
          setPending(false);
        },
        onError: errors => {
          // In a real app we'd show the errors to the user in the UI, for simplicity
          // we just log to the console.
          console.error(errors);
          // When the mutation completes immediately clear the ref
          pendingMutationRef.current = null;
          // And also update state - note that this will be slightly delayed
          setPending(false);
        },
      });
      // Immediately update the ref with the current request
      pendingMutationRef.current = request;
      // Reset the comment text and mark the mutation as pending
      setCommentText('');
      setPending(true);
    },
    [environment, commentText, setCommentText, issueId, pendingMutationRef],
  );

  useEffect(() => {
    // Cancel the mutation when the component unmounts; this is necessary to
    // avoid attempting to modify the unmountd component (e.g. w setPending)
    return () => {
      if (pendingMutationRef.current != null) {
        pendingMutationRef.current.dispose();
      }
    };
  }, [pendingMutationRef]);

  return (
    <form onSubmit={onSubmit} className="issue-actions">
      <textarea
        className="issue-actions-text"
        onChange={onChange}
        value={commentText}
        placeholder={'Leave a comment'}
      />
      <button
        className="issue-actions-submit"
        type="submit"
        disabled={isPending || commentText.trim() === ''}
      >
        Comment
      </button>
    </form>
  );
}
