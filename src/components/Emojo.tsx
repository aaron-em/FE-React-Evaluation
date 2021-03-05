import React, { ReactElement } from "react";

// Support a11y labels for emoji for which they make sense, and
// default to an empty string for purely decorative ones
type EmojoProps = {
  value: string;
  label?: string;
};

export function Emojo({ value, label = "" }: EmojoProps): ReactElement {
  return (
    <span role="img" aria-label={label}>
      {value}
    </span>
  );
}

export const Sparkle = (): ReactElement => Emojo({ value: "✨" });
