import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
