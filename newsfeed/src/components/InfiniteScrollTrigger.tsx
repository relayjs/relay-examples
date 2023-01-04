import * as React from "react";
import LoadingSpinner from "./LoadingSpinner";

const { useEffect, useRef, useLayoutEffect } = React;

export default function InfiniteScrollTrigger({
  onEndReached,
  isLoadingNext,
  hasNext,
}: {
  onEndReached: () => void;
  isLoadingNext: boolean;
  hasNext: boolean;
}): React.ReactElement {
  const onIntersect = useDynamicCallback_UNSAFE(() => {
    if (hasNext && !isLoadingNext) {
      onEndReached();
    }
  });

  const observer = useRef(null);
  if (observer.current === null) {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    }, {});
  }

  const targetRef = useRef(null);
  useEffect(() => {
    const target = targetRef.current;
    observer.current.observe(target);
    return () => {
      observer.current.unobserve(target);
    };
  }, [targetRef]);

  return (
    <>
      <div ref={targetRef} />
      {isLoadingNext && <LoadingSpinner />}
    </>
  );
}

// This is an unsafe hack that you shouldn't copy. It works in this
// very specific situation because the callback is not passed to any
// children of this component. If it were, they could observe a stale
// version of the callback.
function useDynamicCallback_UNSAFE(callback: () => void) {
  const ref = useRef(callback);
  useLayoutEffect(() => {
    ref.current = callback;
  }, [callback]);
  return React.useCallback(() => ref.current(), []);
}
