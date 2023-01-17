import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { MainViewQuery } from "__generated__/MainViewQuery.graphql";
import Issues from "./Issues";

export default function MainView(props: {
  queryRef: PreloadedQuery<MainViewQuery>;
}) {
  const data = usePreloadedQuery(
    graphql`
      query MainViewQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          owner {
            login
          }
          name
          ...IssuesFragment
        }
      }
    `,
    props.queryRef
  );

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>
        {data.repository?.owner.login}/{data.repository?.name}
      </h1>
      <Issues repository={data.repository} />
    </Suspense>
  );
}
