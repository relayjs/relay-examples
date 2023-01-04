import * as React from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function Comment({
  onClick,
  disabled,
}: Props): React.ReactElement {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="comments__loadMore"
    >
      Load more comments
    </button>
  );
}
