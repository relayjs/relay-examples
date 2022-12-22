import * as React from "react";

import type { StoryCommentRowFragment$key } from "./__generated__/StoryCommentRowFragment.graphql";

import { graphql } from 'relay-runtime';
import {useFragment} from 'react-relay'

const StoryCommentRowFragment = graphql`
  fragment StoryCommentRowFragment on Comment {
    text
  }
`;

type Props = {
  comment:  StoryCommentRowFragment$key,
};

export default function StoryCommentRow({
  comment,
}: Props): React.ReactElement {
  const data = useFragment(StoryCommentRowFragment, comment);
  return <div>{data.text}</div>;
}
