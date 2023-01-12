import { graphql } from "relay-runtime";
import { environment } from "src/relay/environment";
import useFragment from "src/relay/useFragment";
import { IssueComponentFragment$key } from "__generated__/IssueComponentFragment.graphql";

const IssueComponent = (props: {
  issue: IssueComponentFragment$key | null;
}) => {
  // On the server we can directly read the
  const data = useFragment<IssueComponentFragment$key>(
    environment,
    graphql`
      fragment IssueComponentFragment on Issue {
        title
        bodyText
        author {
          login
        }
      }
    `,
    props.issue
  );

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.bodyText}</p>
      <p>Author: {data.author?.login}</p>
    </>
  );
};

export default IssueComponent;
