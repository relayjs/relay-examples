import * as React from "react";

export default function Heading({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <h2 className="heading">{children}</h2>;
}
