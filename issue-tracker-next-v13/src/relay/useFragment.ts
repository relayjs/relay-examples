import "server-only";

import { KeyTypeData, KeyType } from "react-relay/relay-hooks/helpers";
import { getSelector, getFragment, GraphQLTaggedNode } from "relay-runtime";
import { environment } from "./environment";

export default function readFragmentData<TKey extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  fragmentRef: TKey | null | undefined
): KeyTypeData<TKey> {
  if (fragmentRef == null) {
    return null;
  }

  const fragmentSelector = getSelector(getFragment(fragmentInput), fragmentRef);
  if (fragmentSelector.kind == "PluralReaderSelector") {
    throw new Error("Support for plural fragments is not implemented, yet.");
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return environment.lookup(fragmentSelector as any).data as any;
  }
}
