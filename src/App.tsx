import React, { ReactElement } from "react";
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
import { Header, Login } from "./components";

import "./App.css";

export type LoginDispatcher = ActionCreator<UserLoginAction>;

export type AppProps = {
  logUserIn: LoginDispatcher;
  loggedInUser: AuthenticatedUserName;
};

type ContentProps = { children: ReactElement[] };

function Content({ children }: ContentProps) {
  return <div className="App-content">{children}</div>;
}

function Welcome() {
  return (
    <Content>
      <Header />
      <p>This is App.tsx</p>
    </Content>
  );
}

function App({ logUserIn, loggedInUser }: AppProps) {
  const isAuthenticated = !!loggedInUser;

  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {isAuthenticated ? <Welcome /> : <Login onSuccess={logUserIn} />}
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
