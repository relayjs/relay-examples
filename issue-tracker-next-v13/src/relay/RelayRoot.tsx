import { getFetchRecords } from "./fetchQuery";
import RelayClientRoot from "./RelayClientRoot";

export default function RelayRoot(props: { children: React.ReactNode }) {
  return (
    <RelayClientRoot fetchedQueries={getFetchRecords()}>
      {props.children}
    </RelayClientRoot>
  );
}
