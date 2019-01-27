import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import weatherWidgetReducers from "./redux/reducers";

//import * as serviceWorker from "./serviceWorker";
const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  weatherWidgetReducers,
  composeEnhancer(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
