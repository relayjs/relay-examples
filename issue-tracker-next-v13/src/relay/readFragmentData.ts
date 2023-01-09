import { KeyTypeData, KeyType } from "react-relay/relay-hooks/helpers";
import {
  getSelector,
  getFragment,
  GraphQLTaggedNode,
  IEnvironment,
} from "relay-runtime";
import isServer from "./isServer";

export default function readFragmentData<TKey extends KeyType>(
  environment: IEnvironment,
  fragmentInput: GraphQLTaggedNode,
  fragmentRef: TKey
): KeyTypeData<TKey> {
  if (!isServer()) {
    throw new Error("readFragmentData should only be called on the server.");
  }

  const fragmentSelector = getSelector(getFragment(fragmentInput), fragmentRef);
  if (fragmentSelector.kind == "PluralReaderSelector") {
    throw new Error("Support for plural fragments is not implemented, yet.");
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return environment.lookup(fragmentSelector as any).data as any;
  }
}
