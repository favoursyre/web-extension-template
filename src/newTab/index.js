//This handles the new tab file

//Libraries -->
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import Tabs from "./newTab";

//Commencing the code
function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can't find App Container");
  }
  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(
    <Router>
      <Tabs />
    </Router>
  );
}

init();
