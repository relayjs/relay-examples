"use client";
import { graphql, usePreloadedQuery } from "react-relay";
import { SerializablePreloadedQuery } from "src/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "src/relay/useSerializablePreloadedQuery";
import { IssueQuery } from "__generated__/IssueQuery.graphql";

export default function Issue(props: {
  preloadedQuery: SerializablePreloadedQuery<IssueQuery>;
}) {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
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
    queryRef
  );

  return (
    <div>
      <h1>{data.repository?.issue?.title}</h1>
      <p>{data.repository?.issue?.bodyText}</p>
      <p>Author: {data.repository?.issue?.author?.login}</p>
    </div>
  );
}
