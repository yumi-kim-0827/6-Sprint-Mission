import { useEffect, useState } from "react";

const MAX_MOBILE_WIDTH = 767;

export const useMobileDetector = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileWidth(width <= MAX_MOBILE_WIDTH);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileWidth;
};
