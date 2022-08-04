import React from "react";

import "./Menu.css";

export default function Menu() {
  return (
    <div className={"menu-landing"}>
      <div className={"container menu-landing__container"}>
        <img
          src={"img/logo-boldare.svg"}
          alt={"Boldare logo"}
          className={"menu-landing__logo"}
        />
        <nav className={"menu-landing__nav"}>
          <a href={"#into"} className={"menu-landing__link"}>
            What?
          </a>
          <a href={"#instructions"} className={"menu-landing__link"}>
            Instructions
          </a>
          <a href={"#tech-radar"} className={"menu-landing__link"}>
            Tech&nbsp;Radar
          </a>
        </nav>
      </div>
    </div>
  );
}
