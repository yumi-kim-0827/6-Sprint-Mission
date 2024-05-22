import { DeviceProductCount, DeviceType } from "@/models/device";

export default function getPageSize(
  deviceState: DeviceType,
  deviceProductCount: DeviceProductCount
): number {
  if (deviceState === "mobile") return deviceProductCount.mobile;
  if (deviceState === "tablet") return deviceProductCount.tablet;
  if (deviceState === "desktop") return deviceProductCount.desktop;

  throw new Error(`Unknown device state: ${deviceState}`);
}
