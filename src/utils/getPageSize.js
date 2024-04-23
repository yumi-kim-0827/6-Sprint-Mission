export default function getPageSize(deviceState, deviceProductCount) {
  if (deviceState === "mobile") return deviceProductCount.mobile;
  if (deviceState === "tablet") return deviceProductCount.tablet;
  if (deviceState === "desktop") return deviceProductCount.desktop;
}
