"use client";

import MainView from "src/components/MainView";
import { Suspense } from "react";
import { SerializablePreloadedQuery } from "src/relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "__generated__/MainViewQuery.graphql";
import { getCurrentEnvironment } from "src/relay/environment";
import { RelayEnvironmentProvider } from "react-relay";
import useSerializablePreloadedQuery from "src/relay/useSerializablePreloadedQuery";

const MainViewClientComponent = (props: {
  preloadQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >;
}) => {
  const environment = getCurrentEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadQuery
  );

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">
        <MainView queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default MainViewClientComponent;
