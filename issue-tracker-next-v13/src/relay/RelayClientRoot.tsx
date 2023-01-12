"use client";

import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { FetchedQuery } from "./fetchQuery";

import { environment } from "./environment";

const seenQueries: Set<string> = new Set();

export default function RelayClientRoot(props: {
  children: React.ReactNode;
  fetchedQueries: readonly FetchedQuery[];
}) {
  props.fetchedQueries.forEach((record) => {
    const queryID = record.operationDescriptor.request.identifier;
    if (seenQueries.has(queryID)) {
      return;
    }
    const data = record.response.data ?? null;
    if (data != null) {
      environment.commitPayload(record.operationDescriptor, data);
      seenQueries.add(queryID);
    }
  });

  return (
    <RelayEnvironmentProvider environment={environment}>
      {props.children}
    </RelayEnvironmentProvider>
  );
}
