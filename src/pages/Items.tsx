import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";

import { Detail, List } from "../components";
import { Item } from "../reducers/data";

export type ItemsProps = {
  type: "skills" | "interests";
};

export function Items<T extends Item>({ type }: ItemsProps): ReactElement {
  return (
    <div className={`page ${type}`}>
      <Switch>
        <Route exact path={`/${type}`}>
          <List<T> type={type} />
        </Route>
        <Route path={`/${type}/:id`}>
          <Detail type={type} />
        </Route>
      </Switch>
    </div>
  );
}
