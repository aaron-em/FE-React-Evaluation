import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "redux";
import { FaUserAstronaut, FaSignOutAlt } from "react-icons/fa";

import { State } from "../reducers";
import {
  AuthenticatedUserName,
  actions as UserActions,
  UserLogoutAction
} from "../reducers/user";

import NoIncLogo from "./noinc-logo.png";

type LogoutDispatcher = ActionCreator<UserLogoutAction>;

type HeaderLinkProps = {
  text: string;
};

function HeaderLink({ text }: HeaderLinkProps) {
  return (
    <div className="link">
      <a href="#">{text}</a>
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
    loggedInUser: state.user.authenticatedUserName
  }),
  dispatch => ({
    logUserOut: () => dispatch(UserActions.LOGOUT())
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
      <HeaderLink text="Home" />
      <HeaderLink text="Navigation 1" />
      <HeaderLink text="Navigation 2" />
      <HeaderUserDisplay />
    </div>
  );
}
