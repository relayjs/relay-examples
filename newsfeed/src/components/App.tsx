import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import Newsfeed from "./Newsfeed";

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <div className="app">
        <Newsfeed />
      </div>
    </RelayEnvironment>
  );
}
