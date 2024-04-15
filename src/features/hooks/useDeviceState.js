import React, { useEffect, useState } from "react";

const MIN_MOBILE_WIDTH = 375;
const MIN_TABLET_WIDTH = 768;
const MIN_DESKTOP_WIDTH = 1200;

const DEVICE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  DESKTOP: "desktop",
};

export default function useDeviceState() {
  const [deviceState, setDeviceState] = useState(getDeviceState());

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

  return deviceState;
}

function getDeviceState() {
  const width = window.innerWidth;

  if (width < MIN_TABLET_WIDTH) return DEVICE.MOBILE;
  if (width < MIN_DESKTOP_WIDTH) return DEVICE.TABLET;
  return DEVICE.DESKTOP;
}
