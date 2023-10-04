import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const store = configureStore({ reducer: Reducers, middleware: [thunk] });
Kommunicate.init("3cfadaaba4c697406bd2c7724f1a00bbb")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
