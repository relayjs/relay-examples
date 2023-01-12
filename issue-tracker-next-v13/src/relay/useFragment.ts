import "server-only";

import { KeyTypeData, KeyType } from "react-relay/relay-hooks/helpers";
import {
  getSelector,
  getFragment,
  GraphQLTaggedNode,
  IEnvironment,
} from "relay-runtime";

// A custom hook to read the data of a fragment from the store.
// This is a simplified version of the useFragment hook from react-relay.
// This is intended to be used in only React Server Components.
// It does not support plural fragments.
export default function useFragment<TKey extends KeyType>(
  environment: IEnvironment,
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
