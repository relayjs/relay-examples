import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { IssueQuery } from "__generated__/IssueQuery.graphql";

export default function Issue(props: { queryRef: PreloadedQuery<IssueQuery> }) {
  const data = usePreloadedQuery(
    graphql`
      query IssueQuery($owner: String!, $name: String!, $issueNumber: Int!) {
        repository(owner: $owner, name: $name) {
          issue(number: $issueNumber) {
            title
            bodyText
            author {
              login
            }
          }
        }
      }
    `,
    props.queryRef
  );

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>{data.repository?.issue?.title}</h1>
      <p>{data.repository?.issue?.bodyText}</p>
      <p>Author: {data.repository?.issue?.author?.login}</p>
    </Suspense>
  );
}
