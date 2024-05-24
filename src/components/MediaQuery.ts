import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface MediaProps {
  children: ReactNode;
}

const Desktop = ({ children }: MediaProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : React.createElement("div");
};

const Tablet = ({ children }: MediaProps) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  return isTablet ? children : React.createElement("div");
};

const Mobile = ({ children }: MediaProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : React.createElement("div");
};

export { Desktop, Tablet, Mobile };
