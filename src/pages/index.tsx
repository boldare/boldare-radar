import * as React from "react";
import { Radar } from "../components/Radar";
import { useRadarData } from "../hooks/useRadarData";
import "./index.css";

const IndexPage = () => {
  const { quadrants, entries, rings } = useRadarData();

  return (
    <main>
      <Radar quadrants={quadrants} entries={entries} rings={rings} />
    </main>
  );
};

export default IndexPage;
