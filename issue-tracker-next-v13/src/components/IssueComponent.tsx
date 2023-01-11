import { graphql } from "relay-runtime";
import readFragmentData from "src/relay/readFragmentData";
import { IssueComponentFragment$key } from "__generated__/IssueComponentFragment.graphql";

const IssueComponent = (props: {
  issue: IssueComponentFragment$key | null;
}) => {
  if (props.issue == null) {
    return null;
  }
  // On the server we can directly read the
  const data = readFragmentData<IssueComponentFragment$key>(
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
