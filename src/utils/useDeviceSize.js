import { useMediaQuery } from "react-responsive";

/*
 * 화면 상태에 따른 함수를 따로 만들어 관리하였습니다.
 * 모바일, 태블릿, PC기준으로 나누었습니다.
 * 기준은 640px이하, 641~1024px, 1025px이상입니다.
 */
export default function useDeviceSize() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isPC = useMediaQuery({ query: "(min-width: 1025px)" });

  return { isMobile, isTablet, isPC };
}
