import React from "react";
import Navbar from "@theme-original/Navbar";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function NavbarWrapper(props) {
  return (
    <BrowserOnly>
      {() => {
        return window.location.pathname === "/tech-radar/" ? (
          <></>
        ) : (
          <Navbar {...props} />
        );
      }}
    </BrowserOnly>
  );
}
