import { useEffect, useState } from "react";

const MIN_TABLET_WIDTH = 768;
const MIN_DESKTOP_WIDTH = 1280;

export enum Device {
  MOBILE = "mobile",
  TABLET = "tablet",
  PC = "pc",
}

function getDeviceState() {
  const width = window.innerWidth;

  if (width < MIN_TABLET_WIDTH) return Device.MOBILE;
  if (width < MIN_DESKTOP_WIDTH) return Device.TABLET;
  return Device.PC;
}

export default function useDeviceState() {
  const [deviceState, setDeviceState] = useState<Device>();

  useEffect(() => {
    function handleResize() {
      window.requestAnimationFrame(() => {
        setDeviceState(getDeviceState());
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceState;
}
