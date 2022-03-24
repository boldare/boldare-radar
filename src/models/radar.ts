export interface Entry {
  quadrant: number;
  ring: number;
  label: string;
  active: boolean;
  moved: number;
}

export interface Ring {
  name: string;
  color: string;
}

export interface Quadrant {
  name: string;
}
