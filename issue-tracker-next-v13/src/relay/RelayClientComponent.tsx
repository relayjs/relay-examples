import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { IEnvironment } from "relay-runtime";
import { environment } from "./environment";
import { FetchQueryInfo } from "./fetchQuery";

// Note: This is just a reference implementation,
// of the possible wrapper for the Relay client components
// that is responsible for committing the payload for
// the operationDescriptor (query + variables) to the
// local relay store
export default function RelayClientComponent(props: {
  environment: IEnvironment;
  fetchQueryInfo: FetchQueryInfo;
  children: React.ReactNode;
}): React.ReactElement {
  // This actually may trigger updates to the Relay
  // subscribers if the payload contains the data
  // for the records that is already in the store.
  // So this needs to be handled (somehow...)
  commitFetchQueryInfo(environment, props.fetchQueryInfo);

  return (
    <RelayEnvironmentProvider environment={props.environment}>
      {props.children}
    </RelayEnvironmentProvider>
  );
}

// We need to keep track of all handled sever payloads
// and do not publish then if their data already has
// been published
const committedFetches: { [key: number]: true } = {};

function commitFetchQueryInfo(
  environment: IEnvironment,
  fetchQueryInfo: FetchQueryInfo
): void {
  if (committedFetches[fetchQueryInfo.fetchID]) {
    return;
  }
  committedFetches[fetchQueryInfo.fetchID] = true;
  const { operationDescriptor, response } = fetchQueryInfo;
  const data = response.data;
  if (data != null) {
    environment.commitPayload(operationDescriptor, data);
  }
}
