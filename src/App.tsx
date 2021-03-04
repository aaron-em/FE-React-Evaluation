import React, { ReactElement } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "redux";
import { Route, Switch } from "react-router-dom";

import { State } from "./reducers";
import {
  AuthenticatedUserName,
  actions as userActions,
  UserLoginAction
} from "./reducers/user";
import { actions as dataActions, FetchDataAction } from "./reducers/data";
import { Header, Login } from "./components";
import { Home, Interests, Skills } from "./pages";

import "./App.css";

export type LoginDispatcher = ActionCreator<UserLoginAction>;
export type FetchDataDispatcher = ActionCreator<FetchDataAction>;

type ContentProps = { children: ReactElement[] };

function Content({ children }: ContentProps) {
  return <div className="App-content">{children}</div>;
}

// TODO: type-restrict AuthenticatedUserName so Home doesn't need string | null

// Note use of Home as fallback path (also covering /) - ordinarily
// we would want a proper 404 page, for indexing purposes if
// nothing else, but in this toy problem I feel OK about what's
// here
export default function App(): ReactElement {
  const dispatch = useDispatch();

  const fetchData = () => dispatch(dataActions.FETCH());
  const logUserIn = (authenticatedUserName: AuthenticatedUserName) =>
    dispatch(userActions.LOGIN(authenticatedUserName));

  const { skills, interests } = useSelector((state: State) => state.data);
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
          <Header />
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/interests">
              <Interests />
            </Route>
            <Route path="*">
              <Home username={loggedInUser} />
            </Route>
          </Switch>
        </Content>
      )}
    </div>
  );
}
