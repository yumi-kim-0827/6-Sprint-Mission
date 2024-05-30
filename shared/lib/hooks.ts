import { useMediaQuery } from "react-responsive";

export default function useCustomMediaQuery() {
  const isMobile = useMediaQuery({ maxWidth: 744 });
  const isTablet = useMediaQuery({ minWidth: 745, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isNotMobile = isTablet || isDesktop;

  return { isMobile, isDesktop, isNotMobile, isTablet };
}
