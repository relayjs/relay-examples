import loadSerializableQuery from "src/relay/loadSerializableQuery";
import styles from "styles/MainView.module.css";
import MainViewQueryNode, {
  MainViewQuery,
} from "__generated__/MainViewQuery.graphql";
import MainViewClientComponent from "./MainViewClientComponent";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >(MainViewQueryNode.params, {
    owner: "facebook",
    name: "relay",
  });

  return (
    <div className={styles.main}>
      <MainViewClientComponent preloadQuery={preloadedQuery} />
    </div>
  );
};

export default Page;

export const revalidate = 0;
