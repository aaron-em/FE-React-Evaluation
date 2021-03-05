import React, { ReactElement } from "react";
import { ActionCreator } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { State } from "./reducers";
import {
  AuthenticatedUserName,
  actions as userActions,
  UserLoginAction,
} from "./reducers/user";
import {
  actions as dataActions,
  FetchDataAction,
  Interest,
  Skill,
} from "./reducers/data";
import { Header, Login } from "./components";
import { Home, Items, NotFound } from "./pages";
import config from "./lib/config";

import "./App.css";

export type LoginDispatcher = ActionCreator<UserLoginAction>;
export type FetchDataDispatcher = ActionCreator<FetchDataAction>;

const rootPath = config.rootPath;

type ContentProps = { children: ReactElement | ReactElement[] };

function Content({ children }: ContentProps) {
  return <div className="App-content">{children}</div>;
}

export default function App(): ReactElement {
  const dispatch = useDispatch();

  const fetchData = () => dispatch(dataActions.FETCH());
  const logUserIn = (authenticatedUserName: AuthenticatedUserName) =>
    dispatch(userActions.LOGIN(authenticatedUserName));

  const { authenticatedUserName: loggedInUser } = useSelector(
    (state: State) => state.user
  );
  const isAuthenticated = !!loggedInUser;

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login
          onSuccess={(authenticatedUserName: AuthenticatedUserName) => {
            fetchData();
            logUserIn(authenticatedUserName);
          }}
        />
      ) : (
        <Content>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path={`${rootPath}/`}>
                <Home username={loggedInUser} />
              </Route>
              <Route path={`${rootPath}/skills`}>
                <Items<Skill> type="skills" />
              </Route>
              <Route path={`${rootPath}/interests`}>
                <Items<Interest> type="interests" />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </Content>
      )}
    </div>
  );
}
