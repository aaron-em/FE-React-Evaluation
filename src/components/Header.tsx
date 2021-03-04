import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "redux";
import { FaUserAstronaut, FaSignOutAlt } from "react-icons/fa";
import { BrowserRouter, Link, useRouteMatch } from "react-router-dom";

import { State } from "../reducers";
import {
  AuthenticatedUserName,
  actions as UserActions,
  UserLogoutAction,
} from "../reducers/user";

import "./Header.css";
import NoIncLogo from "../assets/noinc-logo.png";

type LogoutDispatcher = ActionCreator<UserLogoutAction>;

type HeaderLinkProps = {
  text: string;
  to: string;
};

// TODO: Abstract router into App.tsx to avoid having identical route-matching logic in two places
function HeaderLink({ text, to }: HeaderLinkProps) {
  const active = useRouteMatch({
    path: to,
    exact: to === "/",
  });

  return (
    <div className="link">
      <Link className={active ? "active" : ""} to={to}>
        {text}
      </Link>
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className="logo">
      <img src={NoIncLogo} alt="N0.1nc" />
    </div>
  );
}

type HeaderUserDisplayProps = {
  loggedInUser: AuthenticatedUserName;
  logUserOut: LogoutDispatcher;
};

const HeaderUserDisplay = connect(
  (state: State) => ({
    loggedInUser: state.user.authenticatedUserName,
  }),
  (dispatch) => ({
    logUserOut: () => dispatch(UserActions.LOGOUT()),
  })
)(({ loggedInUser, logUserOut }: HeaderUserDisplayProps) => (
  <div className="user-display">
    <FaUserAstronaut className="icon-user" />
    <div className="user-name">{loggedInUser}</div>
    <FaSignOutAlt
      className="icon-logout"
      title="Log Out"
      onClick={logUserOut}
    />
  </div>
));

export function Header(): ReactElement {
  return (
    <div className="App-header">
      <HeaderLogo />
      <BrowserRouter>
        <HeaderLink text="Home" to="/" />
        <HeaderLink text="Skills" to="/skills" />
        <HeaderLink text="Interests" to="/interests" />
      </BrowserRouter>
      <HeaderUserDisplay />
    </div>
  );
}
