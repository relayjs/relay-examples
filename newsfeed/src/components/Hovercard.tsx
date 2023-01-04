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
    const target = targetRef.current;
    const enterCallback = (event: MouseEvent) => {
      onBeginHover?.();
      setHoverState({
        x: event.clientX,
        y: event.clientY,
      });
    };
    const leaveCallback = () => {
      setHoverState(null);
    };
    target.addEventListener("mouseenter", enterCallback);
    target.addEventListener("mouseleave", leaveCallback);
    return () => {
      target.removeEventListener("mouseenter", enterCallback);
      target.removeEventListener("mouseleave", leaveCallback);
    };
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
