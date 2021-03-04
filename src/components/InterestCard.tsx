import React, { ReactElement } from "react";

import { Interest } from "../reducers/data";
import { ColoredPill } from "../components";

import "./InterestCard.css";

export type InterestCardProps = {
  interest: Interest;
  ordinal: number;
};

export function InterestCard({
  interest,
  ordinal
}: InterestCardProps): ReactElement {
  return (
    <div className="interest-card">
      <div className="inner">
        <h2>Interest {ordinal}</h2>
        <table>
          <tbody>
            <tr>
              <th>NAME:</th>
              <td>{interest.name}</td>
            </tr>
            <tr>
              <th>TYPE:</th>
              <td>
                <ColoredPill text={interest.type} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
