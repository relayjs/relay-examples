import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import LoadingSpinner from "./LoadingSpinner";

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
  return createPortal(
    <div
      className="hovercard"
      style={{
        top: hoverState.y + "px",
        left: hoverState.x + "px",
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </div>,
    document.body
  );
}
