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
          id
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
  const onLoadMore = () => {
    /* TODO */
  };
  return (
    <div>
      {data.comments.edges.map((edge) => (
        <Comment key={edge.node.id} comment={edge.node} />
      ))}
      {data.comments.pageInfo.hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} />
      )}
    </div>
  );
}
