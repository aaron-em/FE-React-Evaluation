import React, { ReactElement, useState } from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import RootReducer from "../src/reducers";
import App from "../src/App";

export default function AppContainer(): ReactElement {
  const [store] = useState(
    createStore(RootReducer, compose(applyMiddleware(thunk)))
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
