import { graphql, useStaticQuery } from "gatsby";
import { Entry, Quadrant, QuadrantName, Ring, RingName } from "../models/radar";

interface LocalDataNode {
  id: string;
  details: {
    meta: {
      category: QuadrantName;
      name: string;
    };
  };
}

interface LocalDataQueryData {
  prototype: { nodes: LocalDataNode[] };
  mvp: { nodes: LocalDataNode[] };
  scaleup: { nodes: LocalDataNode[] };
}

export const LocalDataQuery = graphql`
  fragment Entry on FileConnection {
    nodes {
      id: name
      details: childMarkdownRemark {
        meta: frontmatter {
          category
          name
        }
      }
    }
  }

  {
    prototype: allFile(filter: { sourceInstanceName: { eq: "prototype" } }) {
      ...Entry
    }
    mvp: allFile(filter: { sourceInstanceName: { eq: "mvp" } }) {
      ...Entry
    }
    scaleup: allFile(filter: { sourceInstanceName: { eq: "scaleup" } }) {
      ...Entry
    }
  }
`;

interface UseRadarData {
  rings: Ring[];
  quadrants: Quadrant[];
  entries: Entry[];
}

function mapNodeToEntry(ring: RingName, node: LocalDataNode): Entry {
  return {
    label: node.details.meta.name,
    quadrant: node.details.meta.category,
    ring,
    active: true,
    moved: 0,
  };
}

export function useRadarData(): UseRadarData {
  const data = useStaticQuery<LocalDataQueryData>(LocalDataQuery);

  console.log(data);
  const prototypeEntries = data.prototype.nodes.map((node) =>
    mapNodeToEntry("Prototype", node)
  );
  const mvpEntries = data.mvp.nodes.map((node) => mapNodeToEntry("MVP", node));
  const scaleupEntries = data.scaleup.nodes.map((node) =>
    mapNodeToEntry("Scaleup", node)
  );

  const entries = [...prototypeEntries, ...mvpEntries, ...scaleupEntries];

  const rings = [
    { name: "Prototype", color: "#6652e4" },
    { name: "MVP", color: "#afc9dd" },
    { name: "Scaleup", color: "#f1d624" },
  ] as Ring[];

  const quadrants = [
    { name: "Frameworks" },
    { name: "Platforms & Services" },
    { name: "Techniques" },
    { name: "Tools" },
  ] as Quadrant[];

  return { entries, rings, quadrants };
}
