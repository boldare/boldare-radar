export interface SidebarLink {
  href: string;
  label: string;
}

export interface SidebarCategory extends SidebarLink {
  items: (SidebarLink | SidebarCategory)[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hasSidebarItemLabel(value: any): value is SidebarLink {
  return value?.label && typeof value?.label === "string";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSidebarCategory(value: any): value is SidebarCategory {
  return value?.label && value?.items?.every(hasSidebarItemLabel);
}
