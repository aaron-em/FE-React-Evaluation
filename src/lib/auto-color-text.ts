import { hex as md5sum } from "js-md5";

import {
  hsl2rgb,
  rgb2hsl,
  rgbStringToTuple,
  rgbTupleToString,
} from "./rgb2hsl";

export type HexColor = string;

export default function autoColorText(text: string): HexColor {
  const backgroundColor = md5sum(text).slice(6, 12);

  const rgb = rgbStringToTuple(backgroundColor);
  const [h, s, l] = rgb2hsl(rgb);

  // Clamp saturation and luminance 0.6 <= n <= 0.8 so we get nice
  // pastels
  const clamp = (n: number) => 0.7 + n / 5;
  const newBackground = rgbTupleToString(hsl2rgb([h, clamp(s), clamp(l)]));

  return `#${newBackground}`;
}
