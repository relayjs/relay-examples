import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import type { StoryLikeButtonFragment$key } from "./__generated__/StoryLikeButtonFragment.graphql";

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

export default function StoryLikeButton({ story }: Props) {
  const data = useFragment<StoryLikeButtonFragment$key>(
    StoryLikeButtonFragment,
    story
  );
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

function LikeCount({ count }: { count: number }) {
  return <div className="likeButton__count">{count} likes</div>;
}

function LikeButton({
  doesViewerLike,
  onClick,
  disabled,
}: {
  doesViewerLike: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="likeButton__button"
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={
          doesViewerLike
            ? "likeButton__thumb__viewerLikes"
            : "likeButton__thumb__viewerDoesNotLike"
        }
      >
        👍
      </span>{" "}
      <span
        className={
          doesViewerLike
            ? "likeButton__label__viewerLikes"
            : "likeButton__label__viewerDoesNotLike"
        }
      >
        Like
      </span>
    </button>
  );
}
