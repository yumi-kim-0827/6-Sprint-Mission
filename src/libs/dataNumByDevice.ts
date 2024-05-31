const DEVICE_MIN_WIDTH = {
  TABLET: 768,
  PC: 1280,
};

export default function dataNumbByDevice(
  dataNumArray: [number, number, number],
) {
  const windowWidth = window.innerWidth;

  if (windowWidth < DEVICE_MIN_WIDTH.TABLET) return dataNumArray[0];

  if (
    windowWidth >= DEVICE_MIN_WIDTH.TABLET &&
    windowWidth < DEVICE_MIN_WIDTH.PC
  ) {
    return dataNumArray[1];
  }

  if (windowWidth >= DEVICE_MIN_WIDTH.PC) {
    return dataNumArray[2];
  }

  throw new Error("Unexpected window width");
}
