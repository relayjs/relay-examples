import type { CommentFragment$key } from "../__generated__/CommentFragment.graphql.ts";

import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

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
