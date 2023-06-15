import loadSerializableQuery from "src/relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "__generated__/MainViewQuery.graphql";
import MainView from "src/components/MainView";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<MainViewQuery>(
    MainViewQueryNode,
    {
      owner: "facebook",
      name: "relay",
    }
  );

  return <MainView preloadedQuery={preloadedQuery} />;
};

export default Page;

export const revalidate = 0;
