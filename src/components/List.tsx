import React, { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Cards } from "../components";
import { State } from "../reducers";
import { Item } from "../reducers/data";

import "./List.css";

export type ListProps = {
  type: "skills" | "interests";
};

function titleCase(type: string): Record<string, string> {
  const capped = type.slice(0, 1).toUpperCase() + type.slice(1);
  return {
    plural: capped,
    singular: capped.replace(/s$/, "")
  };
}

export function List<T extends Item>({ type }: ListProps): ReactElement {
  const items = useSelector((state: State) => state.data[type]);
  const [title, setTitle] = useState<Record<string, string>>(titleCase(type));

  useEffect(() => {
    setTitle(titleCase(type));
  }, [type]);

  return (
    <div className="list">
      <h1>{title.plural}</h1>
      <Cards<T> type={type} title={title.singular} items={items} />
    </div>
  );
}
