import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface MediaProps {
  children: ReactNode;
}

const Desktop = ({ children }: MediaProps): React.ReactElement | null => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? <>{children}</> : null;
};

const Tablet = ({ children }: MediaProps): React.ReactElement | null => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  return isTablet ? <>{children}</> : null;
};

const Mobile = ({ children }: MediaProps): React.ReactElement | null => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <>{children}</> : null;
};

export { Desktop, Tablet, Mobile };
