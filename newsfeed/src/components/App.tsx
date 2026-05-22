import { Suspense } from "react";
import RelayEnvironment from "../relay/RelayEnvironment.tsx";
import Newsfeed from "./Newsfeed.tsx";
import LoadingSpinner from "./LoadingSpinner.tsx";

export default function App() {
  return (
    <RelayEnvironment>
      <Suspense
        fallback={
          <div className="app-loading-spinner">
            <LoadingSpinner />
          </div>
        }
      >
        <div className="app">
          <Newsfeed />
        </div>
      </Suspense>
    </RelayEnvironment>
  );
}
