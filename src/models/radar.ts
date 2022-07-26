export enum QuadrantName {
  Techniques = "Techniques",
  Tools = "Tools",
  PlatformsAndServices = "Platforms & Services",
  Frameworks = "Frameworks",
}

export enum RingName {
  Prototype = "Prototype",
  MVP = "MVP",
  PMF = "Product Market Fit",
  Scaling = "Scaling",
}

interface Comment {
  author: string;
  content: string;
}

export interface Entry {
  slug: string;
  quadrant: QuadrantName;
  ring: RingName;
  label: string;
  active: boolean;
  moved: number;
  links?: string[];
  comments?: Comment[];
  externalLink: string;
}

export interface Ring {
  name: RingName;
  color: string;
  externalLink: string;
}

export interface Quadrant {
  name: QuadrantName;
}
