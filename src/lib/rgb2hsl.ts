export type HSLElement = number;
export type HSLTuple = [HSLElement, HSLElement, HSLElement];

export type RGBElement = number;
export type RGBTuple = [RGBElement, RGBElement, RGBElement];

export function rgbStringToTuple(s: string): RGBTuple {
  return s
    .split(/(..)/)
    .filter(Boolean)
    .map((h: string) => parseInt(h, 16)) as RGBTuple;
}

export function rgbTupleToString(t: RGBTuple): string {
  return t.map((n) => n.toString(16).padStart(2, "0")).join("");
}

export function rgb2hsl(rgb: RGBTuple): HSLTuple {
  const [rp, gp, bp] = rgb.map((n) => n / 255);
  const Cmax = Math.max(rp, gp, bp);
  const Cmin = Math.min(rp, gp, bp);
  const Δ = Cmax - Cmin;

  const l = (Cmax + Cmin) / 2;
  const s = Δ === 0 ? 0 : Δ / (1 - Math.abs(2 * l - 1));

  let h: HSLElement;

  if (Δ === 0) {
    h = 0;
  } else {
    if (Cmax === rp) {
      h = (gp - bp) / Δ;
    } else if (Cmax === gp) {
      h = 2 + (bp - rp) / Δ;
    } /* Cmax === bp */ else {
      h = 4 + (rp - gp) / Δ;
    }
  }

  h *= 60;
  h += h < 0 ? 360 : 0;
  h %= 360;

  return [h, s, l];
}

export function hsl2rgb(hsl: HSLTuple): RGBTuple {
  const [h, s, l] = hsl;

  const C = (1 - Math.abs(2 * l - 1)) * s;
  const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - C / 2;

  const rgbp: number[] = (() => {
    if (h >= 300) {
      return [C, 0, X];
    } else if (h >= 240) {
      return [X, 0, C];
    } else if (h >= 180) {
      return [0, X, C];
    } else if (h >= 120) {
      return [0, C, X];
    } else if (h >= 60) {
      return [X, C, 0];
    } /* h >= 0 */ else {
      return [C, X, 0];
    }
  })();

  return rgbp.map((n) => Math.round((n + m) * 255)) as RGBTuple;
}
