const MIN_TABLET_WIDTH = 768;
const MIN_DESKTOP_WIDTH = 1280;

export default function dataNumbByDevice(
  dataNumArray: [number, number, number],
) {
  const windowWidth = window.innerWidth;

  if (windowWidth < MIN_TABLET_WIDTH) return dataNumArray[0];

  if (windowWidth >= MIN_TABLET_WIDTH && windowWidth < MIN_DESKTOP_WIDTH) {
    return dataNumArray[1];
  }

  if (windowWidth >= MIN_DESKTOP_WIDTH) {
    return dataNumArray[2];
  }

  throw new Error("Unexpected window width");
}
