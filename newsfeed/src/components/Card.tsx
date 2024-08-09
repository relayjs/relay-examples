import { ReactNode } from "react";

export default function Card({
  children,
  dim,
}: {
  children: ReactNode;
  dim?: boolean;
}) {
  return <div className={"card" + (dim ? " dim" : "")}>{children}</div>;
}
