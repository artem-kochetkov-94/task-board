import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./components/App/";
import configureStore from './store';
import { Provider } from "react-redux";

const store = configureStore();

localStorage.clear();

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
