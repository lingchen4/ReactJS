import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./reducers/cart-reducer";
const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
