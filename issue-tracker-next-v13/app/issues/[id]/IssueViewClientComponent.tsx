"use client";

import { RelayEnvironmentProvider } from "react-relay";
import Issue from "src/components/Issue";
import { Suspense } from "react";
import IssueQueryNode, { IssueQuery } from "__generated__/IssueQuery.graphql";
import { SerializablePreloadedQuery } from "src/relay/loadSerializableQuery";
import { getCurrentEnvironment } from "src/relay/environment";
import useSerializablePreloadedQuery from "src/relay/useSerializablePreloadedQuery";

const Root = (props: {
  loadedQuery: SerializablePreloadedQuery<typeof IssueQueryNode, IssueQuery>;
}) => {
  const environment = getCurrentEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.loadedQuery
  );

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">
        <Issue queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default Root;
