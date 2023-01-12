import { getFetchedQueries } from "./fetchQuery";
import RelayClientRoot from "./RelayClientRoot";

export default function RelayRoot(props: { children: React.ReactNode }) {
  return (
    <RelayClientRoot fetchedQueries={getFetchedQueries()}>
      {props.children}
    </RelayClientRoot>
  );
}
