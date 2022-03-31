import * as React from "react";
import { render } from "@testing-library/react";
import { Radar } from "./Radar";
import { Entry, Quadrant, Ring } from "../../models/radar";

const quadrants = [
  { name: "Techniques" },
  { name: "Tools" },
  { name: "Platforms & Services" },
  { name: "Frameworks" },
] as Quadrant[];

const entries = [
  {
    active: true,
    color: "#fbdb84",
    id: "27",
    index: 0,
    label: "AWS Athena",
    moved: 0,
    quadrant: "Platforms & Services",
    ring: "PMF/Scaling",
  },
  {
    quadrant: "Platforms & Services",
    ring: "PMF/Scaling",
    label: "Google Bigtable",
    active: true,
    moved: 0,
  },
  {
    quadrant: "Tools",
    ring: "PMF/Scaling",
    label: "Airflow",
    active: true,
    moved: 0,
  },
  {
    quadrant: "Platforms & Services",
    ring: "PMF/Scaling",
    label: "AWS DynamoDB",
    active: true,
    moved: 0,
  },
  {
    quadrant: "Tools",
    ring: "PMF/Scaling",
    label: "Nginx",
    active: true,
    moved: 0,
  },
] as Entry[];

const rings = [
  {
    color: "#93c47d",
    name: "Prototype",
  },
  {
    color: "#93d2c2",
    name: "MVP",
  },
  {
    color: "#fbdb84",
    name: "PMF/Scaling",
  },
] as Ring[];

describe("Radar component", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
      <Radar
        handleEntryClick={jest.fn()}
        entries={entries}
        rings={rings}
        quadrants={quadrants}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
