import { Entry, Quadrant, QuadrantName, Ring, RingName } from "../models/radar";
import {
  hasSidebarItemLabel,
  isSidebarCategory,
  SidebarCategory,
  SidebarLink,
} from "./useDocsSidebarItems";

interface UseRadarData {
  rings: Ring[];
  quadrants: Quadrant[];
  entries: Entry[];
}

function toEntry(
  ring: SidebarLink,
  quadrant: SidebarLink,
  item: SidebarLink
): Entry {
  if (!Object.values(QuadrantName).includes(quadrant.label as QuadrantName)) {
    throw new Error(
      `Unknown quadrant value ${quadrant.label} for href ${item.href}`
    );
  } else if (!Object.values(RingName).includes(ring.label as RingName)) {
    throw new Error(`Unknown ring value ${ring.label} for href ${item.href}`);
  }
  return {
    slug: item.id,
    label: item.label || item.id,
    quadrant: quadrant.label as QuadrantName,
    ring: ring.label as RingName,
    moved: 0,
    active: true,
    externalLink: "",
  };
}

function useRadarEntries(sidebarItems: unknown[]): Entry[] {
  const ringsItems = sidebarItems?.filter(
    (ringItem) =>
      isSidebarCategory(ringItem) &&
      Object.values(RingName).includes(ringItem.label as RingName)
  ) as SidebarCategory[];

  const entries = ringsItems.flatMap((ringItem) =>
    ringItem.items
      .filter(isSidebarCategory)
      .flatMap((quadrantItem) =>
        quadrantItem.items
          .filter(hasSidebarItemLabel)
          .flatMap((item) => toEntry(ringItem, quadrantItem, item))
      )
  );

  return entries;
}

export function useRadarData(items: unknown[]): UseRadarData | null {
  if (!items?.length) {
    return null;
  }
  const entries = useRadarEntries(items);

  const rings = [
    {
      name: RingName.Prototype,
      color: "#6652e4",
      externalLink:
        "https://www.boldare.com/services/full-cycle-product-development/prototyping/",
    },
    {
      name: RingName.MVP,
      color: "#afc9dd",
      externalLink: "https://www.boldare.com/services/mvp-development/",
    },
    {
      name: RingName.PMF,
      color: "#f1d624",
      externalLink:
        "https://www.boldare.com/services/product-market-fit-expanding-demand/",
    },
    {
      name: RingName.Scaling,
      color: "#242424",
      externalLink:
        "https://www.boldare.com/services/scaling-your-product-thriving-in-the-market/",
    },
  ] as Ring[];

  const quadrants = [
    { name: QuadrantName.Frameworks },
    { name: QuadrantName.PlatformsAndServices },
    { name: QuadrantName.Techniques },
    { name: QuadrantName.Tools },
  ] as Quadrant[];

  return { entries, rings, quadrants };
}
