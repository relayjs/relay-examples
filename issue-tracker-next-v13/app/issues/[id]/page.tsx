import loadSerializableQuery from "src/relay/loadSerializableQuery";
import IssueQueryNode, { IssueQuery } from "__generated__/IssueQuery.graphql";
import Issue from "src/components/Issue";

export default async function IssuePage({
  params,
}: {
  params: { id: string };
}) {
  const preloadedQuery = await loadSerializableQuery<IssueQuery>(
    IssueQueryNode,
    {
      owner: "facebook",
      name: "relay",
      issueNumber: parseInt(params.id, 10),
    }
  );

  return <Issue preloadedQuery={preloadedQuery} />;
}

export const revalidate = 0;
