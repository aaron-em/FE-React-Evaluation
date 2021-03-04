import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { ColoredPill, NotFound } from "../components";
import { State } from "../reducers";
import { Item, toID } from "../reducers/data";

export type DetailProps = {
  type: "skills" | "interests";
};

export type DetailParams = {
  id: string;
};

export function Detail({ type }: DetailProps): ReactElement {
  const { id } = useParams<DetailParams>();
  const item = useSelector((state: State) =>
    (state.data[type] as Item[]).find((i: Item) => i.id === toID(id))
  );

  return typeof item === "undefined" ? (
    <NotFound />
  ) : (
    <div className="detail">
      <h1>{item.name}</h1>
      <ColoredPill text={item.type} />
      <p>{item.detail}</p>
    </div>
  );
}
