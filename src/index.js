import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import reducer from "./reducers/reducer";

import WannaTagList from "./components/pages/WannaTagList";
//import Test from "./components/test";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <WannaTagList />
  </Provider>,
  document.querySelector(".main")
);
