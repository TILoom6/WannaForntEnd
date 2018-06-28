import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import wannatagsReducer from "./reducers/WannatagsReducer";

import WannaTagList from "./components/pages/WannaTagList";

const store = createStore(wannatagsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <WannaTagList />
  </Provider>,
  document.querySelector(".main")
);
