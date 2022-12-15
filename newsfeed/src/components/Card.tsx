import * as React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="card">{children}</div>;
}
