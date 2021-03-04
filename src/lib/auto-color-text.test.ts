import autoColorText from "./auto-color-text";

import { rgbTupleToString as rgbt } from "./rgb2hsl";

describe("autoColorText", () => {
  it("emits a pleasant pastel color for some text", () => {
    const expected = rgbt([248, 230, 173]);
    expect(autoColorText("Sport")).toEqual(`#${expected}`);
  });
});
