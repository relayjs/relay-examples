import { Suspense } from "react";

import RelayEnvironment from "../relay/RelayEnvironment";
import LoadingSpinner from "./LoadingSpinner";
import Newsfeed from "./Newsfeed";

export default function App() {
  return (
    <RelayEnvironment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="app">
          <Newsfeed />
        </div>
      </Suspense>
    </RelayEnvironment>
  );
}
