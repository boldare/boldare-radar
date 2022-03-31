import { graphql, useStaticQuery } from "gatsby";
import { Entry, Quadrant, Ring } from "../models/radar";

interface LocalDataQueryData {
  allEntriesJson: {
    nodes: Entry[];
  };
  allQuadrantsJson: {
    nodes: Quadrant[];
  };
  allRingsJson: {
    nodes: Ring[];
  };
}

export const LocalDataQuery = graphql`
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
        links
        comments {
          author
          content
        }
      }
    }
  }
`;

interface UseRadarData {
  rings: Ring[];
  quadrants: Quadrant[];
  entries: Entry[];
}

export function useRadarData(): UseRadarData {
  const data = useStaticQuery<LocalDataQueryData>(LocalDataQuery);

  const entries = data.allEntriesJson.nodes;
  const rings = data.allRingsJson.nodes;
  const quadrants = data.allQuadrantsJson.nodes;

  return { entries, rings, quadrants };
}
