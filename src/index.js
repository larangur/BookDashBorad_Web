import React from "react";
import { Provider } from "react-redux";
import { store } from "./context/store.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
