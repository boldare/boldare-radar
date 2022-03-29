type QuadrantName =
  | "Techniques"
  | "Tools"
  | "Platforms & Services"
  | "Frameworks";

type RingName = "Prototype" | "MVP" | "PMF/Scaling";

export interface Entry {
  quadrant: QuadrantName;
  ring: RingName;
  label: string;
  active: boolean;
  moved: number;
}

export interface Ring {
  name: RingName;
  color: string;
}

export interface Quadrant {
  name: QuadrantName;
}
