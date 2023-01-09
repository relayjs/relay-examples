"use client";

import { environment } from "src/relay/environment";
import { IssuesFragment$key } from "__generated__/IssuesFragment.graphql";
import RelayClientComponent from "src/relay/RelayClientComponent";
import { FetchQueryInfo } from "src/relay/fetchQuery";
import Issues from "src/components/Issues";

const MainViewClientComponent = (props: {
  issues: IssuesFragment$key | null;
  fetchQueryInfo: FetchQueryInfo;
}) => {
  return (
    <RelayClientComponent
      environment={environment}
      fetchQueryInfo={props.fetchQueryInfo}
    >
      <Issues issues={props.issues} />
    </RelayClientComponent>
  );
};

export default MainViewClientComponent;
