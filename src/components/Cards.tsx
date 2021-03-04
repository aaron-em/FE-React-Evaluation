import React, { ReactElement } from "react";

import { Interest, Skill } from "../reducers/data";
import { ColoredPill } from "../components";

import "./Cards.css";

type CardProps = {
  type: string;
  item: Skill | Interest;
  ordinal: number;
};

function Card({ type, item, ordinal }: CardProps): ReactElement {
  return (
    <div className="card">
      <div className="inner">
        <h2>
          {type} {ordinal}
        </h2>
        <table>
          <tbody>
            <tr>
              <th>NAME:</th>
              <td>{item.name}</td>
            </tr>
            <tr>
              <th>TYPE:</th>
              <td>
                <ColoredPill text={item.type} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export type CardsProps = {
  type: string;
  items: Skill[] | Interest[];
};

export function Cards({ type, items }: CardsProps): ReactElement {
  return (
    <div className="cards">
      {items.map((item: Skill | Interest, i: number) => (
        <Card key={i} type={type} item={item} ordinal={i + 1} />
      ))}
    </div>
  );
}
