import * as React from "react";

type Props = {
  onClick: () => void;
};

export default function Comment({
  onClick,
}: Props): React.ReactElement {
  return  (
    <button
      onClick={onClick}
      className="comments__loadMore">
        Load more comments
    </button>
  );
}
