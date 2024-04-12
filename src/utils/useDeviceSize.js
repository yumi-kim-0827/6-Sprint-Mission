import { useMediaQuery } from "react-responsive";

export default function useDeviceSize() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isPC = useMediaQuery({ query: "(min-width: 1025px)" });

  return { isMobile, isTablet, isPC };
}
