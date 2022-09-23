//This handles the popup file

//Libraries -->
import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup";

//Commencing the code
function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can't find App Container");
  }
  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<Popup />);
}

init();
