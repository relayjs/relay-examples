import { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return <h2 className="heading">{children}</h2>;
}
