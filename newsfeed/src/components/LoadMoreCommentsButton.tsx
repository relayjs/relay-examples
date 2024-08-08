type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function LoadMoreCommentsButton({
  onClick,
  disabled,
}: Props) {
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
