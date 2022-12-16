import * as React from "react";
// import { exampleFetch } from "../relay/example";
import RelayEnvironment from "../relay/RelayEnvironment";
import Newsfeed from "./Newsfeed";
import LoadingSpinner from './LoadingSpinner';

export default function App(): React.ReactElement {
  // Uncomment to test the fetch
  // React.useEffect(() => {
  //   exampleFetch().then((data) => console.log("data", data));
  // }, []);

  return (
    <RelayEnvironment>
      <React.Suspense fallback={<LoadingSpinner />}>
        <div className="app">
          <Newsfeed />
        </div>
      </React.Suspense>
    </RelayEnvironment>
  );
}
