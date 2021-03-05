import React, { ReactElement } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Detail, List } from "../components";
import { Item } from "../reducers/data";

export type ItemsProps = {
  type: "skills" | "interests";
};

export function Items<T extends Item>({ type }: ItemsProps): ReactElement {
  const { path } = useRouteMatch();

  return (
    <div className={`page ${type}`}>
      <Switch>
        <Route exact path={`${path}/`}>
          <List<T> type={type} />
        </Route>
        <Route path={`${path}/:id`}>
          <Detail type={type} />
        </Route>
      </Switch>
    </div>
  );
}
