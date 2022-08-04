import React from "react";

import "./Intro.css";

export default function Intro() {
  return (
    <section className={"intro"} id={"intro"}>
      <div className={"container intro__container"}>
        <div className={"intro__img-box"}>
          <img
            src={"img/computer.png"}
            alt={"computer"}
            className={"intro__img"}
          />
        </div>
        <div className={"intro__description"}>
          <h1 className={"intro__title"}>
            <span className={"intro__title-top"}>
              Boldare's
              <img
                src={"img/arrow.svg"}
                alt={"arrow"}
                className={"intro__arrow"}
              />
            </span>
            <span className={"intro__title-bottom"}>
              <img
                src={"img/scribble-white.svg"}
                alt={"scribble"}
                className={"intro__scribble"}
              />
              <span className={"intro__title-bottom-text"}>Tech Radar</span>
            </span>
          </h1>
          <h2 className={"intro__subtitle"}>
            Use our tech expertise for the benefit of your product and business
          </h2>
          <p>
            We are Boldare, digital product creators & consultants. We create
            human-centered digital products for forward-thinking companies to
            help them redefine their industries.
          </p>
          <a href={"#tech-radar"} className={"intro__button"}>
            Go to radar
          </a>
        </div>
      </div>
    </section>
  );
}
