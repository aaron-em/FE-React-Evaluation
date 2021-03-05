import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "../__mocks__/TestContainer";

describe("app", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
