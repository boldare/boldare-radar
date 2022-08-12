import React from "react";

import "./ReadMore.css";

export default function ReadMore() {
  return (
    <section className={"read-more"}>
      <div className={"container read-more__container"}>
        <h3 className={"read-more__title"}>
          To read more about each technology, click its name&nbsp;
          <span className={"read-more__title-highlighted"}>
            <img
              src={"img/scribble-small.svg"}
              alt={"scribble"}
              className={"read-more__scribble"}
            />
            <span className={"read-more__title-highlighted-text"}>
              on the Radar.
            </span>
          </span>
        </h3>
      </div>
    </section>
  );
}
