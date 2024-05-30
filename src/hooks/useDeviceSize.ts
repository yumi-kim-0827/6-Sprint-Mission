import { useState, useEffect } from "react";
import debounce from "@/utils/debounce";
import {
  MEDIUM_DEVICE_WIDTH,
  LARGE_DEVICE_WIDTH,
} from "@/constants/deviceSize";

const useDeviceSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const debouncedResize = debounce(handleResize, 150);
    debouncedResize();
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  const getDeviceSize = (width: number) => {
    if (MEDIUM_DEVICE_WIDTH > width) return "small";
    if (LARGE_DEVICE_WIDTH > width) return "medium";
    return "large";
  };

  return getDeviceSize(windowSize.width);
};

export default useDeviceSize;
