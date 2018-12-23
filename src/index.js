import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./components/App/App";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";


localStorage.clear();

const store = createStore(
  reducers
);

store.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
  // console.log(store.getState());
});

window.store = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
