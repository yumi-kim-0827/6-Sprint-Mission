export default function getProductsPerPage(deviceState) {
  if (deviceState === "mobile") return 4;
  if (deviceState === "tablet") return 6;
  if (deviceState === "desktop") return 10;
}
