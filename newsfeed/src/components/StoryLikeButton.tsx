import * as React from "react";
import { graphql } from 'relay-runtime';
import {useFragment} from 'react-relay';

import type {StoryLikeButtonFragment$key} from './__generated__/StoryLikeButtonFragment.graphql';

type Props = {
  story: StoryLikeButtonFragment$key;
};

const StoryLikeButtonFragment = graphql`
  fragment StoryLikeButtonFragment on Story {
    id
    likeCount
    doesViewerLike
  }
`;

export default function StoryLikeButton({ story }: Props): React.ReactElement {
  const data = useFragment<StoryLikeButtonFragment$key>(StoryLikeButtonFragment, story);
  const onLikeButtonClicked = () => {
    // To be filled in
  };
  return (
    <div className="likeButton">
      <LikeCount count={data.likeCount} />
      <LikeButton
        doesViewerLike={data.doesViewerLike}
        onClick={onLikeButtonClicked}
      />
    </div>
  );
}

function LikeCount({count}: {count: number}) {
  return <div className="likeButton__count">{count}</div>;
}

function LikeButton({
  doesViewerLike,
  onClick,
}: {
  doesViewerLike: boolean;
  onClick: () => void;
}) {
  return (
    <button className="likeButton__button" onClick={onClick}>
      <span className={doesViewerLike ?
        'likeButton__thumb__viewerLikes' : 'likeButton__thumb__viewerDoesNotLike'
      }>
        👍
      </span>{' '}
      Like
    </button>
  );
}
