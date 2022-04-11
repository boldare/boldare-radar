import * as React from "react";
import { Entry, Quadrant, Ring } from "../../models/radar";
import { radar_visualization } from "../../radar/visualization";

interface RadarProps {
  quadrants: Quadrant[];
  rings: Ring[];
  entries: Entry[];
  handleEntryClick: (entry: Entry) => void;
}

const quadrantMap = {
  Frameworks: 0,
  "Platforms & Services": 1,
  Techniques: 2,
  Tools: 3,
};

const ringMap = {
  Prototype: 0,
  MVP: 1,
  Scaleup: 2,
};

export function Radar({
  quadrants,
  entries,
  rings,
  handleEntryClick,
}: RadarProps) {
  const ref = React.useRef(null);

  const formattedEntries = React.useMemo(
    () =>
      entries.map((entry) => {
        return {
          ...entry,
          ring: ringMap[entry.ring],
          quadrant: quadrantMap[entry.quadrant],
        };
      }),
    [entries]
  );

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
      entries: formattedEntries,
      rings,
      print_layout: true,
      handleEntryClick,
      // zoomed_quadrant: 0,
    });
  }, [ref, entries, rings, quadrants]);

  return <svg ref={ref} />;
}
