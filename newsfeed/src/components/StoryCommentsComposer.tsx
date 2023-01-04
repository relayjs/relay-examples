import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { StoryCommentsComposerFragment$key } from "./__generated__/StoryCommentsComposerFragment.graphql";

const { useState } = React;

export type Props = {
  story: StoryCommentsComposerFragment$key;
};

const StoryCommentsComposerFragment = graphql`
  fragment StoryCommentsComposerFragment on Story {
    id
  }
`;

export default function StoryCommentsComposer({ story }: Props) {
  const data = useFragment(StoryCommentsComposerFragment, story);
  const [text, setText] = useState("");
  function onPost() {
    // TODO post the comment here
  }
  return (
    <div className="commentsComposer">
      <TextComposer text={text} onChange={setText} onReturn={onPost} />
      <PostButton onClick={onPost} />
    </div>
  );
}

function TextComposer({
  text,
  onChange,
  onReturn,
}: {
  text: string;
  onChange: (newValue: string) => void;
  onReturn: () => void;
}) {
  return (
    <input
      value={text}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          onReturn();
        }
      }}
    />
  );
}

function PostButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Post</button>;
}
