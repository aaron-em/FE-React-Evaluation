import React, { ReactElement } from "react";

import { NotFound as NotFoundComponent } from "../components";

export function NotFound(): ReactElement {
  return (
    <div className="page not-found">
      <NotFoundComponent />
    </div>
  );
}
