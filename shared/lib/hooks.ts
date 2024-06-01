import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 744;
  const isTablet = width <= 1199;
  const isDesktop = width > 1200;

  return { isMobile, isTablet, isDesktop };
};
