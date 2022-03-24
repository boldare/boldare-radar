import * as React from "react";
import { render } from "@testing-library/react";
import { Radar } from "./Radar";

const quadrants = [
  { name: "Languages" },
  { name: "Infrastructure" },
  { name: "Datastores" },
  { name: "Data Management" },
];

const entries = [
  {
    active: true,
    color: "#fbdb84",
    id: "27",
    index: 0,
    label: "AWS Athena",
    moved: 0,
    quadrant: 3,
    ring: 2,
  },
  {
    quadrant: 2,
    ring: 2,
    label: "Google Bigtable",
    active: true,
    moved: 0
  },
  {
    quadrant: 3,
    ring: 0,
    label: "Airflow",
    active: true,
    moved: 0
  },
  {
    quadrant: 2,
    ring: 0,
    label: "AWS DynamoDB",
    active: true,
    moved: 0
  },
  {
    quadrant: 1,
    ring: 0,
    label: "Nginx",
    active: true,
    moved: 0,
  },
];

const rings = [
  {
    color: "#93c47d",
    name: "ADOPT",
  },
  {
    color: "#93d2c2",
    name: "TRIAL",
  },
  {
    color: "#fbdb84",
    name: "ASSESS",
  },
];

describe("Radar component", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
      <Radar entries={entries} rings={rings} quadrants={quadrants} />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
