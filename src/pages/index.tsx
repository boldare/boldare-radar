import { graphql } from "gatsby";
import * as React from "react";
import { radar_visualization } from "../radar/visualization";
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

interface Entry {
  quadrant: number;
  ring: number;
  label: string;
  active: boolean;
  moved: number;
}

interface Ring {
  name: string;
  color: string;
}

interface Quadrant {
  name: string;
}

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

  React.useEffect(() => {
    radar_visualization({
      svg_id: "radar",
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
  }, []);

  return (
    <main>
      <svg id="radar"></svg>
    </main>
  );
};

export default IndexPage;
