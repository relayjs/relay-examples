import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment, useRelayEnvironment } from 'react-relay/hooks';
import { commitMutation, ConnectionHandler } from 'relay-runtime';

const { useCallback, useState } = React;

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
  const environment = useRelayEnvironment();
  const [commentText, setCommentText] = useState('');
  const [pendingRequest, setPendingRequest] = useState(null);
  const data = useFragment(
    graphql`
      fragment IssueActions_issue on Issue {
        id
      }
    `,
    props.issue,
  );

  const onChange = useCallback(
    event => {
      setCommentText(event.target.value);
    },
    [setCommentText],
  );

  const onSubmit = useCallback(
    event => {
      if (pendingRequest != null) {
        return;
      }
      event.preventDefault();
      const request = commitMutation(environment, {
        mutation: AddCommentMutation,
        variables: {
          input: {
            body: commentText,
            subjectId: data.id,
          },
        },
        updater: store => {
          const issue = store.get(data.id);
          if (issue == null) {
            return;
          }
          const comments = ConnectionHandler.getConnection(
            issue,
            'IssueDetailComments_comments',
          );
          if (comments == null) {
            return;
          }
          ConnectionHandler.insertEdgeAfter(
            comments,
            store.getRootField('addComment').getLinkedRecord('commentEdge'),
          );
        },
      });
      setCommentText('');
      setPendingRequest(request);
    },
    [environment, commentText, setCommentText, data, pendingRequest],
  );

  return (
    <form onSubmit={onSubmit} className="issue-actions">
      <textarea
        className="issue-actions-text"
        onChange={onChange}
        value={commentText}
        placeholder={'Leave a comment'}
      />
      <button className="issue-actions-submit" type="submit">
        Comment
      </button>
    </form>
  );
}
