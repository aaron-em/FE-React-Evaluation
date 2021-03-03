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
import { Home } from "./pages";

import "./App.css";

export type LoginDispatcher = ActionCreator<UserLoginAction>;

type ContentProps = { children: ReactElement[] };

function Content({ children }: ContentProps) {
  return <div className="App-content">{children}</div>;
}

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
      {!isAuthenticated ? (
        <Login onSuccess={logUserIn} />
      ) : (
        <Content>
          <Header />
          <Switch>
            <Route path="/">
              <Home username={loggedInUser} />
            </Route>
          </Switch>
        </Content>
      )}
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
