import { graphql } from "relay-runtime";
import { environment } from "src/relay/environment";
import fetchQuery from "src/relay/fetchQuery";
import styles from "styles/MainView.module.css";
import { pageMainViewQuery } from "__generated__/pageMainViewQuery.graphql";

import MainViewClientComponent from "./MainViewClientComponent";

// This is a server only component. FetchQuery is never executed on the client
// we're passing serializable fragment key (+ we include extra information about fetched queries)
// so we can process them on the client (add client components can also
const Page = async () => {
  const { data, ...clientComponentsData } = await fetchQuery<pageMainViewQuery>(
    environment,
    graphql`
      query pageMainViewQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          owner {
            login
          }
          name
          # eslint-disable-next-line relay/must-colocate-fragment-spreads
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
      <MainViewClientComponent
        issues={data.repository ?? null}
        {...clientComponentsData}
      />
    </div>
  );
};

export default Page;

export const revalidate = 0;
