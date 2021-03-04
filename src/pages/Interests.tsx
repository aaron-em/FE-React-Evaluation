import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { Cards } from "../components";
import { State } from "../reducers";

import "./Interests.css";

export type InterestsProps = unknown;

export function Interests(): ReactElement {
  const { interests } = useSelector((state: State) => state.data);

  return (
    <div className="page interests">
      <h1>Interests</h1>
      <Cards type={"Interest"} items={interests} />
    </div>
  );
}
