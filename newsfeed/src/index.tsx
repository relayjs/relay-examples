import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./style.css";

import App from "./components/App";
import GraphiQL from "./components/playground/GraphiQL";

function Routes() {
  if (window.location.pathname === "/playground") {
    return <GraphiQL />;
  }
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Routes />);
