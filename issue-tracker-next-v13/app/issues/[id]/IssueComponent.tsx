import { graphql } from "relay-runtime";
import readFragmentData from "src/relay/readFragmentData";
import { IssueComponentFragment$key } from "__generated__/IssueComponentFragment.graphql";
import { environment } from "src/relay/environment";

const IssueComponent = (props: {
  fragmentKey: IssueComponentFragment$key | null;
}) => {
  if (props.fragmentKey == null) {
    return null;
  }

  const data = readFragmentData<IssueComponentFragment$key>(
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
    props.fragmentKey
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
