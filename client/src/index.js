import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import App from "./App";
import "./index.css";

import { reducers } from "./reducers";

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
  // compose(applyMiddleware(thunk), applyMiddleware(logger))
);

// createLogger({
//   predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN,
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
