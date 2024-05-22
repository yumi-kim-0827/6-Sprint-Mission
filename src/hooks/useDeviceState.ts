import { Device, DeviceType } from "models/device";
import React, { useEffect, useState } from "react";

const MIN_MOBILE_WIDTH = 375;
const MIN_TABLET_WIDTH = 768;
const MIN_DESKTOP_WIDTH = 1200;

export default function useDeviceState() {
  const [deviceState, setDeviceState] = useState<DeviceType>(getDeviceState());
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    function handleResize() {
      window.requestAnimationFrame(() => {
        setDeviceState(getDeviceState());
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileWidth(deviceState === "mobile");
  }, [deviceState]);

  return { deviceState, isMobileWidth };
}

function getDeviceState() {
  const width = window.innerWidth;

  if (width < MIN_TABLET_WIDTH) return Device.MOBILE;
  if (width < MIN_DESKTOP_WIDTH) return Device.TABLET;
  return Device.DESKTOP;
}
