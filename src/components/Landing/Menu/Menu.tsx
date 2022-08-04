import React from "react";

import "./Menu.css";

export default function Menu() {
  return (
    <div className={"menu"}>
      <div className={"container menu__container"}>
        <img
          src={"img/logo-boldare.svg"}
          alt={"Boldare logo"}
          className={"menu__logo"}
        />
        <nav className={"menu__nav"}>
          <a href={"#into"} className={"menu__link"}>
            What?
          </a>
          <a href={"#instructions"} className={"menu__link"}>
            Instructions
          </a>
          <a href={"#tech-radar"} className={"menu__link"}>
            Tech&nbsp;Radar
          </a>
        </nav>
      </div>
    </div>
  );
}
