import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import { BrowserRouter } from "react-router-dom";
import { SuspenceContainer } from "./utils";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <SuspenceContainer>
        <App />
      </SuspenceContainer>
    </BrowserRouter>
  </Provider>
);
