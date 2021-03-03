import React, { ReactElement } from "react";

import { Header } from ".";

type ContentProps = { children: ReactElement[] };

function Content({ children }: ContentProps) {
  return <div className="App-content">{children}</div>;
}

export function Home() {
  return (
    <Content>
      <Header />
      <p>Welcome home</p>
    </Content>
  );
}
