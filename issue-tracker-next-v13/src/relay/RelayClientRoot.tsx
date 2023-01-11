"use client";

import React, { useRef, useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { IEnvironment } from "relay-runtime";
import { FetchRecord } from "./fetchQuery";

import RelayEnvironment from "src/relay/RelayEnvironment";

export default function RelayClientRoot(props: {
  children: React.ReactNode;
  fetchedQueries: readonly FetchRecord[];
}): React.ReactElement {
  useFetchQueryInfo(RelayEnvironment, props.fetchedQueries);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        {props.children}
        <hr />
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click
        </button>
        <div>Counter: {counter}</div>
      </RelayEnvironmentProvider>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__RELAY_CLIENT_COMPONENTS_DATA__ = ${JSON.stringify(
            props.fetchedQueries
          )};`,
        }}
      ></script>
    </>
  );
}
function useFetchQueryInfo(
  environment: IEnvironment,
  fetchedQueries: readonly FetchRecord[]
): void {
  const processedQueries = useRef(new Set());

  fetchedQueries.forEach((record) => {
    if (!processedQueries.current.has(record)) {
      processedQueries.current.add(record);
      const data = record.response.data ?? null;

      if (data != null) {
        environment.commitPayload(record.operationDescriptor, data);
      }
    }
  });
}
