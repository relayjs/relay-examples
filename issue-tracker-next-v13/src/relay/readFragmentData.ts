import "server-only";

import { KeyTypeData, KeyType } from "react-relay/relay-hooks/helpers";
import { getSelector, getFragment, GraphQLTaggedNode } from "relay-runtime";
import RelayServerEnvironment from "./RelayServerEnvironment";

export default function readFragmentData<TKey extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  fragmentRef: TKey
): KeyTypeData<TKey> {
  const fragmentSelector = getSelector(getFragment(fragmentInput), fragmentRef);
  if (fragmentSelector.kind == "PluralReaderSelector") {
    throw new Error("Support for plural fragments is not implemented, yet.");
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return RelayServerEnvironment.lookup(fragmentSelector as any).data as any;
  }
}
