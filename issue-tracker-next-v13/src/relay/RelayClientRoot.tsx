"use client";

import React, { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { FetchRecord } from "./fetchServerQuery";

import { createEnvironment } from "./environment";

export default function RelayClientRoot(props: {
  children: React.ReactNode;
  fetchedQueries: readonly FetchRecord[];
}): React.ReactElement {
  const environment = useMemo(() => {
    const environment = createEnvironment();
    props.fetchedQueries.forEach((record) => {
      const data = record.response.data ?? null;
      if (data != null) {
        environment.commitPayload(record.operationDescriptor, data);
      }
    });
    return environment;
  }, [props.fetchedQueries]);

  return (
    <RelayEnvironmentProvider environment={environment}>
      {props.children}
    </RelayEnvironmentProvider>
  );
}
