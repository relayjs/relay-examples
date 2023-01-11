import styles from "styles/Issue.module.css";
import { pageIssueQuery } from "__generated__/pageIssueQuery.graphql";
import fetchQuery from "src/relay/fetchQuery";
import { environment } from "src/relay/environment";
import { graphql } from "relay-runtime";
import IssueComponent from "./IssueComponent";
import { Suspense } from "react";

export default async function IssuePage({
  params,
}: {
  params: { id: string };
}) {
  const response = fetchQuery<pageIssueQuery>(
    environment,
    graphql`
      query pageIssueQuery(
        $owner: String!
        $name: String!
        $issueNumber: Int!
      ) {
        repository(owner: $owner, name: $name) {
          issue(number: $issueNumber) {
            ...IssueComponentFragment
          }
        }
      }
    `,
    {
      owner: "facebook",
      name: "relay",
      issueNumber: parseInt(params.id, 10),
    }
  );
  return (
    <Suspense fallback={"Loading issue..."}>
      <div className={styles.issue}>
        <IssueComponent
          // This may allow us to send multiple GraphQL queries in one request
          fragmentKey={(await response).data.repository?.issue ?? null}
        />
      </div>
    </Suspense>
  );
}
