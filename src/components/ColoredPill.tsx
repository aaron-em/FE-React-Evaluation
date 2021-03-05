import React, { ReactElement, useEffect, useState } from "react";

import autoColorText from "../lib/auto-color-text";

import "./ColoredPill.css";

export type ColoredPillProps = {
  text: string;
};

export function ColoredPill({ text }: ColoredPillProps): ReactElement {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    autoColorText(text)
  );

  useEffect(() => {
    setBackgroundColor(autoColorText(text));
  }, [text]);

  return (
    <div className="colored-pill" style={{ backgroundColor }}>
      {text}
    </div>
  );
}
