import { Suspense } from "react";
import { graphql } from "relay-runtime";
import fetchQuery from "src/relay/fetchQuery";
import styles from "styles/MainView.module.css";
import { pageMainViewQuery } from "__generated__/pageMainViewQuery.graphql";

import RelayServerRoot from "src/relay/RelayServerRoot";

import RelayEnvironment from "src/relay/RelayEnvironment";
import Issues from "src/components/Issues";

// This is a server only component. FetchQuery is never executed on the client
// we're passing serializable fragment key (+ we include extra information about fetched queries)
// so we can process them on the client (add client components can also
const Page = async () => {
  const data = await fetchQuery<pageMainViewQuery>(
    RelayEnvironment,
    graphql`
      query pageMainViewQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          owner {
            login
          }
          name
          ...IssuesFragment
        }
      }
    `,
    {
      owner: "facebook",
      name: "relay",
    }
  );

  return (
    <Suspense fallback="loading...">
      <div className={styles.main}>
        <h1>
          {data.repository?.owner.login}/{data.repository?.name}
        </h1>
        <RelayServerRoot>
          <Issues issues={data.repository ?? null} />
        </RelayServerRoot>
      </div>
    </Suspense>
  );
};

export default Page;
