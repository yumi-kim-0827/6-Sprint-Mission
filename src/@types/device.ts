const Device = {
  Mobile: "mobile",
  Tablet: "tablet",
  PC: "pc",
} as const;

export default Device;

export type DeviceValue = (typeof Device)[keyof typeof Device];
