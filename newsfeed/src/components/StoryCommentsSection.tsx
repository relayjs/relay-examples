import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import type { StoryCommentsSectionFragment$key } from "./__generated__/StoryCommentsSectionFragment.graphql";
import Comment from "./Comment";

export type Props = {
  story: StoryCommentsSectionFragment$key;
};

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story {
    comments(first: 1) {
      pageInfo {
        startCursor
      }
      edges {
        node {
          id
          ...CommentFragment
        }
      }
    }
  }
`;

export default function StoryCommentsSection({ story }: Props) {
  const data = useFragment(StoryCommentsSectionFragment, story);
  return (
    <div>
      {data.comments.edges.map((edge) => (
        <Comment key={edge.node.id} comment={edge.node} />
      ))}
    </div>
  );
}
