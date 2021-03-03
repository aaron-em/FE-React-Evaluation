import React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "redux";
import { Route, Switch } from "react-router-dom";

import { fakeInterests, fakeSkills } from "./dummy-data";
import { State } from "./reducers";
import {
  AuthenticatedUserName,
  actions as UserActions,
  UserLoginAction
} from "./reducers/user";
import { Home, Login } from "./components";

import "./App.css";

export type LoginDispatcher = ActionCreator<UserLoginAction>;

export type AppProps = {
  logUserIn: LoginDispatcher;
  loggedInUser: AuthenticatedUserName;
};

function App({ logUserIn, loggedInUser }: AppProps) {
  const isAuthenticated = !!loggedInUser;

  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {isAuthenticated ? <Home /> : <Login onSuccess={logUserIn} />}
        </Route>
      </Switch>
    </div>
  );
}

export default connect(
  (state: State) => ({
    loggedInUser: state.user.authenticatedUserName
  }),
  dispatch => ({
    logUserIn: (authenticatedUserName: AuthenticatedUserName) =>
      dispatch(UserActions.LOGIN(authenticatedUserName))
  })
)(App);
