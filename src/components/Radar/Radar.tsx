import * as React from "react";
import { useRadarData } from "../../hooks/useRadarData";
import {
  Entry,
  Quadrant,
  QuadrantName,
  Ring,
  RingName,
} from "../../models/radar";
import { radar_visualization } from "../../radar/visualization";
import { useHistory } from "@docusaurus/router";
import { ampli } from "../../ampli";

interface RadarProps {
  quadrants: Quadrant[];
  rings: Ring[];
  entries: Entry[];
  handleEntryClick: (entry: Entry) => void;
}

const quadrantMap: Record<QuadrantName, number> = {
  [QuadrantName.Frameworks]: 0,
  [QuadrantName.PlatformsAndServices]: 1,
  [QuadrantName.Techniques]: 2,
  [QuadrantName.Tools]: 3,
};

const ringMap: Record<RingName, number> = {
  [RingName.Prototype]: 0,
  [RingName.MVP]: 1,
  [RingName.PMF]: 2,
  [RingName.Scaling]: 3,
};

export function Radar({
  quadrants,
  entries,
  rings,
  handleEntryClick,
}: RadarProps) {
  const ref = React.useRef(null);
  const radarRendered = React.useRef(false);

  const formattedEntries = React.useMemo(
    () =>
      entries.map((entry) => ({
        ...entry,
        ringId: ringMap[entry.ring],
        quadrantId: quadrantMap[entry.quadrant],
      })),
    [entries]
  );

  React.useEffect(() => {
    if (radarRendered.current) {
      return;
    }
    ampli.viewRadar();

    radar_visualization({
      ref,
      width: 1450,
      height: 1000,
      colors: {
        background: "var(--ifm-background-color)",
        grid: "#bbb",
        inactive: "#ddd",
      },
      quadrants,
      entries: formattedEntries,
      rings,
      print_layout: true,
      handleEntryClick,
      // zoomed_quadrant: 0,
    });

    radarRendered.current = true;
  }, [ref, radarRendered, entries, rings, quadrants]);

  return <svg ref={ref} />;
}

export function RadarContainer() {
  const data = useRadarData();
  const history = useHistory();

  return (
    <div style={{ overflow: "auto" }}>
      <Radar
        {...data}
        handleEntryClick={(entry) => {
          if (entry?.label) {
            ampli.openItem({
              itemName: entry.label,
              itemQuadrant: entry.quadrant,
              itemRing: entry.ring,
            });
          }
          if (entry?.externalLink) {
            openInNewTab(entry.externalLink);
            return;
          }
          history.push(entry.slug);
        }}
      />
    </div>
  );
}

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
