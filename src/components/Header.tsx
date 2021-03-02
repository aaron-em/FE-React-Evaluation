import React, { ReactElement } from "react";
import { connect } from "react-redux";

import { State } from "../reducers";
import { AuthenticatedUserName } from "../reducers/user";

import NoIncLogo from "./noinc-logo.png";

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
};

const HeaderUserDisplay = connect((state: State) => ({
  loggedInUser: state.user.authenticatedUserName
}))(({ loggedInUser }: HeaderUserDisplayProps) => (
  <div className="user-display">{loggedInUser || "Log In"}</div>
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
