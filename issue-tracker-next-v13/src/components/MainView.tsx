"use client";

import { graphql, usePreloadedQuery } from "react-relay";
import { SerializablePreloadedQuery } from "src/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "src/relay/useSerializablePreloadedQuery";
import { MainViewQuery } from "__generated__/MainViewQuery.graphql";
import Issues from "./Issues";

export const query = graphql`
  query MainViewQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      owner {
        login
      }
      name
      ...IssuesFragment
    }
  }
`;

export default function MainView(props: {
  preloadedQuery: SerializablePreloadedQuery<MainViewQuery>;
}) {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
  const data = usePreloadedQuery(query, queryRef);

  return (
    <div>
      <h1>
        {data.repository?.owner.login}/{data.repository?.name}
      </h1>
      <Issues repository={data.repository} />
    </div>
  );
}
