import { graphql } from "gatsby";
import * as React from "react";
import { radar_visualization } from "../radar/visualization";
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
  const ref = React.useRef(null);

  const entries = props.data.allEntriesJson.nodes;
  const rings = props.data.allRingsJson.nodes;
  const quadrants = props.data.allQuadrantsJson.nodes;

  React.useEffect(() => {
    radar_visualization({
      ref,
      width: 1450,
      height: 1000,
      colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd",
      },
      title: "Boldare Radar",
      quadrants,
      entries,
      rings,
      print_layout: true,
      // zoomed_quadrant: 0,
    });
  }, [ref, entries, rings, quadrants]);

  return (
    <main>
      <svg ref={ref}></svg>
    </main>
  );
};

export default IndexPage;
