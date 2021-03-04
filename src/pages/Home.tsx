import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { Cards } from "../components";
import { State } from "../reducers";
import { Interest } from "../reducers/data";

import "./Home.css";

export type HomeProps = {
  username: string | null;
};

export function Home({ username }: HomeProps): ReactElement {
  const { interests } = useSelector((state: State) => state.data);

  return (
    <div className="page home">
      {username ? <h1 className="welcome-banner">Welcome {username}</h1> : null}
      <p className="lipsum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Cards<Interest>
        type="interests"
        title="Interest"
        items={interests.slice(0, 3)}
      />
    </div>
  );
}
