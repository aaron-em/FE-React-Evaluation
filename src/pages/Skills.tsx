import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { Cards } from "../components";
import { State } from "../reducers";

import "./Skills.css";

export type SkillsProps = unknown;

export function Skills(): ReactElement {
  const { skills } = useSelector((state: State) => state.data);

  return (
    <div className="page skills">
      <h1>Skills</h1>
      <Cards type={"Skill"} items={skills} />
    </div>
  );
}
