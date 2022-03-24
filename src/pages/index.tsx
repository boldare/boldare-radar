import * as React from "react";
import { graphql } from "gatsby";
import { Radar } from "../components/Radar";
import { Entry, Quadrant, Ring } from "../models/radar";
import "./index.css";

export const pageQuery = graphql`
  query {
    allRingsJson {
      nodes {
        name
        color
      }
    }

    allQuadrantsJson {
      nodes {
        name
      }
    }

    allEntriesJson {
      nodes {
        ring
        quadrant
        label
        moved
        active
      }
    }
  }
`;

interface Props {
  data: {
    allEntriesJson: {
      nodes: Entry[];
    };
    allQuadrantsJson: {
      nodes: Quadrant[];
    };
    allRingsJson: {
      nodes: Ring[];
    };
  };
}

const IndexPage = (props: Props) => {
  const entries = props.data.allEntriesJson.nodes;
  const rings = props.data.allRingsJson.nodes;
  const quadrants = props.data.allQuadrantsJson.nodes;

  return (
    <main>
      <Radar quadrants={quadrants} entries={entries} rings={rings} />
    </main>
  );
};

export default IndexPage;
