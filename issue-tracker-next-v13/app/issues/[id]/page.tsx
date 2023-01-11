import styles from "styles/Issue.module.css";
import { pageIssueQuery } from "__generated__/pageIssueQuery.graphql";
import fetchQuery from "src/relay/fetchQuery";
import { graphql } from "relay-runtime";
import IssueComponent from "src/components/IssueComponent";
import { environment } from "src/relay/environment";

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
    <div className={styles.issue}>
      <IssueComponent issue={(await response).repository?.issue ?? null} />
    </div>
  );
}
