import React from "react";
import Menu from "../components/Landing/Menu/Menu";
import Intro from "../components/Landing/Intro/Intro";
import ReadMore from "../components/Landing/ReadMore/ReadMore";
import TechRadar from "../components/Landing/TechRadar/TechRadar";
import Instructions from "../components/Landing/Instructions/Instructions";
import Footer from "../components/Landing/Footer/Footer";

export default function Home(): JSX.Element {
  return (
    <div style={{ overflow: "auto" }}>
      <Menu />
      <Intro />
      <ReadMore />
      <TechRadar />
      <Instructions />
      <Footer />
    </div>
  );
}
