import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import type { StoryCommentsSectionFragment$key } from "./__generated__/StoryCommentsSectionFragment.graphql";
import Comment from "./Comment";
import LoadMoreCommentsButton from "./LoadMoreCommentsButton";

export type Props = {
  story: StoryCommentsSectionFragment$key;
};

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story {
    comments(first: 3) {
      edges {
        node {
          ...CommentFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export default function StoryCommentsSection({ story }: Props) {
  const data = useFragment(StoryCommentsSectionFragment, story);
  const onLoadMore = () => {/* TODO */};
  return (
    <>
      {data.comments.edges.map(commentEdge =>
        <Comment comment={commentEdge.node} />
      )}
      {data.comments.pageInfo.hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} />
      )}
    </>
  );
}
