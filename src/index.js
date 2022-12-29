// import store from "./Redux/state1";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { store } from "./Redux/Redux-store/Redux-store";
import { Provider } from "react-redux";
import { Router, RouterProvider } from "react-router";
import { history } from "./History";
import { createMemoryHistory } from "history";

let rerenderEntireTree = () => {
  // console.log(state, "state");
  // console.log(store, "rerender.js");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
// rerenderEntireTree(store.getState());

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

// dispatch={store.dispatch.bind(store)}
// store={store} state={state}
//  history={history} navigator={history}
