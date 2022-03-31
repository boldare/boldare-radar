type QuadrantName =
  | "Techniques"
  | "Tools"
  | "Platforms & Services"
  | "Frameworks";

type RingName = "Prototype" | "MVP" | "PMF/Scaling";

interface Comment {
  author: string;
  content: string;
}

export interface Entry {
  quadrant: QuadrantName;
  ring: RingName;
  label: string;
  active: boolean;
  moved: number;
  links?: string[];
  comments?: Comment[];
}

export interface Ring {
  name: RingName;
  color: string;
}

export interface Quadrant {
  name: QuadrantName;
}
