export type DeviceType = "mobile" | "tablet" | "desktop";

export enum Device {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

export interface DeviceProductCount {
  mobile: number;
  tablet: number;
  desktop: number;
}
