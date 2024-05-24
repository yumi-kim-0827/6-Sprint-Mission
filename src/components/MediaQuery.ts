import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  // console.log("Desktop", isDesktop);
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  // console.log("Tablet", isTablet);
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // console.log("MOBILE", isMobile);
  return isMobile ? children : null;
};

export { Desktop, Tablet, Mobile };
