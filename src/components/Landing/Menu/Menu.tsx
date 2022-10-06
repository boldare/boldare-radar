import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useState } from "react";

import "./Menu.css";

export default function Menu() {
  const { siteConfig } = useDocusaurusContext();

  const navData = [
    {
      label: "What?",
      anchor: "#into",
    },
    {
      label: "Instructions",
      anchor: "#instructions",
    },
    {
      label: "Tech Radar",
      anchor: "#tech-radar",
    },
  ];

  const navItems = navData.map((navElement) => (
    <a
      href={navElement.anchor}
      className={"menu-landing__link"}
      key={navElement.anchor}
    >
      {navElement.label}
    </a>
  ));

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={"menu-landing"}>
      <div className={"container menu-landing__container"}>
        <a href={siteConfig.url}>
          <img
            src={"img/logo-boldare.svg"}
            alt={"Boldare logo"}
            className={"menu-landing__logo"}
          />
        </a>
        <nav className={"menu-landing__nav"}>
          <div className={"menu-landing__nav-desktop"}>{navItems}</div>
          <div
            className={"menu-landing__nav-hamburger"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {showMenu && (
            <div
              className={"menu-landing__nav-mobile"}
              onClick={() => setShowMenu(false)}
            >
              {navItems}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
