import ReactMarkdown from 'react-markdown';
import SuspenseImage from '../../components/SuspenseImage';
import React from 'react';

export default function IssueDetailComment(props) {
  const { comment } = props;
  return (
    <div className="issue-comment">
      <SuspenseImage
        className="issue-comment-author-image"
        title={`${comment.author.login}'s avatar`}
        src={comment.author.avatarUrl}
      />
      <div className="issue-comment-author-name">{comment.author.login}</div>
      <div className="issue-comment-body">
        <ReactMarkdown
          source={comment.body}
          renderers={{ image: SuspenseImage }}
        />
      </div>
    </div>
  );
}
