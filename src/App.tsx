import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { fakeInterests, fakeSkills } from "./dummy-data";
import { State } from "./reducers";
import { AuthenticatedUserName } from "./reducers/user";
import { Header, Login } from "./components";

import "./App.css";

export type AppProps = {
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

function App({ loggedInUser }: AppProps) {
  const isAuthenticated = !!loggedInUser;

  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <Switch>
        <Route path="/">{isAuthenticated ? <Welcome /> : <Login />}</Route>
      </Switch>
    </div>
  );
}

export default connect((state: State) => ({
  loggedInUser: state.user.authenticatedUserName
}))(App);
