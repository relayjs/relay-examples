import React, { useState, useCallback } from 'react';
import { ConnectionHandler } from 'relay-runtime';
import { useFragment } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import useMutation from './useMutation';

import { IssueActions_issue$key } from './__generated__/IssueActions_issue.graphql';

import { IssueActionsAddCommentMutation as AddComment } from './__generated__/IssueActionsAddCommentMutation.graphql';
import { IssueActionsCloseIssueMutation as CloseIssue } from './__generated__/IssueActionsCloseIssueMutation.graphql';
import { IssueActionsReopenIssueMutation as ReopenIssue } from './__generated__/IssueActionsReopenIssueMutation.graphql';

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

const CloseIssueMutation = graphql`
  mutation IssueActionsCloseIssueMutation($input: CloseIssueInput!) {
    closeIssue(input: $input) {
      issue {
        closed
      }
    }
  }
`;

const ReopenIssueMutation = graphql`
  mutation IssueActionsReopenIssueMutation($input: ReopenIssueInput!) {
    reopenIssue(input: $input) {
      issue {
        closed
      }
    }
  }
`;

interface Props {
  issue: IssueActions_issue$key;
}

export default function IssueActions(props: Props) {
  // Track the current comment text - this is used as the value of the comment textarea
  const [commentText, setCommentText] = useState('');

  const [isCommentPending, addComment] = useMutation<AddComment>(
    AddCommentMutation,
  );
  const [isClosePending, closeIssue] = useMutation<CloseIssue>(
    CloseIssueMutation,
  );
  const [isReopenPending, reopenIssue] = useMutation<ReopenIssue>(
    ReopenIssueMutation,
  );
  const isPending = isCommentPending || isClosePending || isReopenPending;

  // Get the data we need about the issue in order to execute the mutation. Right now that's just
  // the id, but in the future this component might neeed more information.
  const data = useFragment(
    graphql`
      fragment IssueActions_issue on Issue {
        id
        closed
      }
    `,
    props.issue,
  );
  const issueId = data.id;

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCommentText(event.target.value);
    },
    [],
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addComment({
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
          if (issue == null) return;
          // Get the list of comments using the same 'key' value as defined in
          // IssueDetailComments
          const comments = ConnectionHandler.getConnection(
            issue,
            'IssueDetailComments_comments', // See IssueDetailsComments @connection
          );
          if (comments == null) return;
          // Insert the edge at the end of the list
          ConnectionHandler.insertEdgeAfter(
            comments,
            store.getRootField('addComment').getLinkedRecord('commentEdge'),
            null, // we can specify a cursor value here to insert the new edge after that cursor
          );
        },
      });
      // Reset the comment text
      setCommentText('');
    },
    [addComment, commentText, issueId],
  );

  const onToggleOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      // Switch mutation based on the current open/close status
      const config = {
        variables: {
          input: {
            issueId,
          },
        },
      };
      if (data.closed) {
        reopenIssue(config);
      } else {
        closeIssue(config);
      }
    },
    [closeIssue, data.closed, issueId, reopenIssue],
  );

  return (
    <form className="issue-actions" onSubmit={onSubmit}>
      <textarea
        className="issue-actions-text"
        onChange={onChange}
        value={commentText}
        placeholder="Leave a comment"
      />
      <button
        className="issue-actions-button"
        type="submit"
        disabled={isPending || commentText.trim() === ''}
      >
        Comment
      </button>
      <button
        className="issue-actions-button"
        type="button"
        onClick={onToggleOpen}
      >
        {data.closed ? 'Reopen' : 'Close'}
      </button>
    </form>
  );
}
