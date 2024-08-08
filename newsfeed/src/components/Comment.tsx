import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import type { CommentFragment$key } from "./__generated__/CommentFragment.graphql";

const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    text
  }
`;

type Props = {
  comment: CommentFragment$key;
};

export default function Comment({ comment }: Props) {
  const data = useFragment(CommentFragment, comment);
  return <div className="comment">{data.text}</div>;
}
