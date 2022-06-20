import * as React from "react";
import Admonition from "@theme/Admonition";

import "./RadarIntro.css";

export function RadarIntro() {
  return (
    <div className="RadarIntro__container">
      <Admonition type="tip">
        Click on radar entry to view more details
      </Admonition>
    </div>
  );
}
