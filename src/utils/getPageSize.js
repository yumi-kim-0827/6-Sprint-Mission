export default function getPageSize(deviceState, pageSizeArray) {
  if (deviceState === "mobile") return pageSizeArray[0];
  if (deviceState === "tablet") return pageSizeArray[1];
  if (deviceState === "desktop") return pageSizeArray[2];
}
