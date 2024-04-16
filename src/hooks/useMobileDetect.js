import { useEffect, useState } from "react";
import useDeviceState from "./useDeviceState";

export function useMobileDetector() {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const deviceState = useDeviceState();

  useEffect(() => {
    setIsMobileWidth(deviceState === "mobile");
  }, [deviceState]);

  return isMobileWidth;
}
