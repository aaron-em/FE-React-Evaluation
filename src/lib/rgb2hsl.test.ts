import {
  hsl2rgb,
  rgb2hsl,
  rgbStringToTuple as rgbt,
  HSLTuple,
  RGBTuple,
  rgbStringToTuple,
  rgbTupleToString,
} from "./rgb2hsl";

describe("tuple <-> string conversions", () => {
  it("should convert string to tuple", () => {
    const expected = [255, 128, 64];
    expect(rgbStringToTuple("ff8040")).toStrictEqual(expected);
  });

  it("should convert tuple to string", () => {
    const expected = "ff8040";
    expect(rgbTupleToString([255, 128, 64])).toStrictEqual(expected);
  });
});

describe("rgb2hsl", () => {
  const cases: [string, RGBTuple, HSLTuple][] = [
    ["black", rgbt("000000"), [0, 0, 0]],
    ["white", rgbt("ffffff"), [0, 0, 1]],

    ["red", rgbt("ff0000"), [0, 1, 0.5]],
    ["green", rgbt("00ff00"), [120, 1, 0.5]],
    ["blue", rgbt("0000ff"), [240, 1, 0.5]],
    ["yellow", rgbt("ffff00"), [60, 1, 0.5]],
    ["cyan", rgbt("00ffff"), [180, 1, 0.5]],
    ["magenta", rgbt("ff00ff"), [300, 1, 0.5]],

    ["dark red", rgbt("800000"), [0, 1, 0.25]],
    ["dark green", rgbt("008000"), [120, 1, 0.25]],
    ["dark blue", rgbt("000080"), [240, 1, 0.25]],
    ["dark yellow", rgbt("808000"), [60, 1, 0.25]],
    ["dark cyan", rgbt("008080"), [180, 1, 0.25]],
    ["dark magenta", rgbt("800080"), [300, 1, 0.25]],

    ["light gray", rgbt("bfbfbf"), [0, 0, 0.75]],
    ["medium gray", rgbt("808080"), [0, 0, 0.5]],
    ["dark gray", rgbt("404040"), [0, 0, 0.25]],

    ["green near white", rgbt("f7fff7"), [120, 1, 0.98]],
    ["purple near black", rgbt("070007"), [300, 1, 0.01]],
  ];

  it("should correctly convert RGB colors to HSL", () => {
    const failedCases = cases
      .map(([name, input, expected]) => {
        const actual = rgb2hsl(input);
        const normalized = actual.map((n) => parseFloat(n.toFixed(2)));

        try {
          expect(normalized).toStrictEqual(expected);
          return false;
        } catch (e) {
          return JSON.stringify({ name, input, expected, actual });
        }
      })
      .filter(Boolean);

    expect(failedCases).toStrictEqual([]);
  });
});

describe("hsl2rgb", () => {
  it("should be the dual of rgb2hsl", () => {
    const expected = rgbt("abcdef");
    expect(hsl2rgb(rgb2hsl(expected))).toStrictEqual(expected);
  });
});
