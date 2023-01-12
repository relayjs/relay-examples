import { graphql } from "relay-runtime";
import fetchQuery from "src/relay/fetchQuery";
import styles from "styles/MainView.module.css";
import { pageMainViewQuery } from "__generated__/pageMainViewQuery.graphql";

import RelayRoot from "src/relay/RelayRoot";

import Issues from "src/components/Issues";
import { environment } from "src/relay/environment";

// This is a server only component. FetchQuery is never executed on the client
// we're passing serializable fragment key (+ we include extra information about fetched queries)
// so we can process them on the client (add client components can also
const Page = async () => {
  const data = await fetchQuery<pageMainViewQuery>(
    environment,
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
    <div className={styles.main}>
      <h1>
        {data.repository?.owner.login}/{data.repository?.name}
      </h1>
      <RelayRoot>
        <Issues issues={data.repository ?? null} />
      </RelayRoot>
    </div>
  );
};

export default Page;
