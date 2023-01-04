import * as React from "react";
import * as ReactDOM from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

const { useEffect, useState } = React;

export type Props = {
  children: React.ReactElement;
  targetRef: { current: HTMLElement };
  onBeginHover?: () => void;
};

export default function Hovercard({
  children,
  targetRef,
  onBeginHover,
}: Props) {
  const [hoverState, setHoverState] = useState(null);
  useEffect(() => {
    document.addEventListener("mouseover", (event) => {
      if (event.target === targetRef.current) {
        onBeginHover?.();
        setHoverState({
          x: event.clientX,
          y: event.clientY,
        });
      } else {
        // setHoverState(null);
      }
    });
  });
  if (!hoverState) {
    return null;
  }
  return ReactDOM.createPortal(
    <div
      className="hovercard"
      style={{
        top: hoverState.y + "px",
        left: hoverState.x + "px",
      }}
    >
      <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
    </div>,
    document.body
  );
}
