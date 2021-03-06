import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Providers from "./contexts/index.context";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
