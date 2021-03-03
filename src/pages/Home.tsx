import React, { ReactElement } from "react";

import "./Home.css";

export type HomeProps = {
  username: string | null;
};

export function Home({ username }: HomeProps): ReactElement {
  return (
    <div className="page home">
      {username ? <h1 className="welcome-banner">Welcome {username}</h1> : null}
    </div>
  );
}
