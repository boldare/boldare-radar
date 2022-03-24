import * as React from "react";
import { Entry, Quadrant, Ring } from "../../models/radar";
import { radar_visualization } from "../../radar/visualization"

interface RadarProps {
  quadrants: Quadrant[];
  rings: Ring[];
  entries: Entry[];
}

export function Radar({ quadrants, entries, rings }: RadarProps) {
  const ref = React.useRef(null);

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
    <svg ref={ref} />
  )
}
