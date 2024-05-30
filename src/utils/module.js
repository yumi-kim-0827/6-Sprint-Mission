// import { useWindowSize } from "@uidotdev/usehooks";

const BREAKPOINT = {
  MOBILE: 744,
  TABLET: 1200,
};

const SIZE_OF_BEST_ITEMS = {
  DESKTOP: "4",
  TABLET: "2",
  MOBILE: "1",
};

const SIZE_OF_ALL_ITEMS = {
  DESKTOP: "10",
  TABLET: "6",
  MOBILE: "4",
};

function isMobile() {
  const width = window.innerWidth;
  return width < BREAKPOINT.MOBILE;
}

function isTablet() {
  const width = window.innerWidth;
  return BREAKPOINT.MOBILE <= width && width < BREAKPOINT.TABLET;
}

function isDesktop() {
  const width = window.innerWidth;
  return width >= BREAKPOINT.TABLET;
}

function calculatePageSize(type) {
  if (type === "best") {
    if (isDesktop) {
      return SIZE_OF_BEST_ITEMS.DESKTOP;
    } else if (isTablet) {
      return SIZE_OF_BEST_ITEMS.TABLET;
    } else if (isMobile) {
      return SIZE_OF_BEST_ITEMS.MOBILE;
    }
  } else if (type === "favorite") {
    if (isDesktop) {
      return SIZE_OF_ALL_ITEMS.DESKTOP;
    } else if (isTablet) {
      return SIZE_OF_ALL_ITEMS.TABLET;
    } else if (isMobile) {
      return SIZE_OF_ALL_ITEMS.MOBILE;
    }
  }
}

export { BREAKPOINT, isMobile, isTablet, isDesktop, calculatePageSize };
