"use client";

import MainView from "src/components/MainView";
import { Suspense } from "react";
import { useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "src/relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "__generated__/MainViewQuery.graphql";
import useSerializablePreloadedQuery from "src/relay/useSerializablePreloadedQuery";

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return (
    <Suspense fallback="Loading...">
      <MainView queryRef={queryRef} />
    </Suspense>
  );
};

export default MainViewClientComponent;
