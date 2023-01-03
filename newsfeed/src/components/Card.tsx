import * as React from "react";

export default function Card({
  children,
  dim,
}: {
  children: React.ReactNode;
  dim?: boolean;
}): React.ReactElement {
  return <div className={"card" + (dim ? " dim" : "")}>{children}</div>;
}
