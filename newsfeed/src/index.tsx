import { createRoot } from "react-dom/client";

import App from "./components/App";
import GraphiQL from "./components/playground/GraphiQL";
import "./style.css";

function Routes() {
  if (window.location.pathname === "/playground") {
    return <GraphiQL />;
  }
  return <App />;
}

const root = createRoot(document.getElementById("app"));
root.render(<Routes />);
