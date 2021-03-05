import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Item } from "../reducers/data";
import { ColoredPill } from "../components";

import "./Cards.css";

type CardProps<T extends Item> = {
  type: string;
  title: string;
  item: T;
};

function Card<T extends Item>({
  type,
  title,
  item,
}: CardProps<T>): ReactElement {
  return (
    <Link className="card-link" to={`${type}/${item.id}`}>
      <div className="card">
        <div className="inner">
          <h2>
            {title} {item.id}
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
    </Link>
  );
}

// See comment below for details
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export type CardsProps<T extends Item> = {
  type: string;
  title: string;
  items: Item[];
};

export function Cards<T extends Item>({
  type,
  title,
  items,
}: CardsProps<T>): ReactElement {
  return (
    <div className="cards">
      {
        // The problem here seems to be that I don't know how to
        // tell the type checker that, at runtime, `items` will be
        // *only* T[], i.e. only either Skill[] or Interest[]. I
        // assume this is solvable, but it needs someone who knows
        // more TS than I do right now.
        // In the meantime, we escape with `any` and promise eslint
        // it's ok.
        // In production code I'd instead derive SkillsList and
        // InterestsList from List and give them the according
        // concrete types. (And would also be using runtypes to
        // validate what we get from the API.)

        /* eslint-disable @typescript-eslint/no-explicit-any */
        items.map((item: any, i: number) => (
          <Card<T> key={i} type={type} title={title} item={item} />
        ))
        /* eslint-enable @typescript-eslint/no-explicit-any */
      }
    </div>
  );
}
