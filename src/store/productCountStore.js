import { create } from "zustand";
import { useEffect } from "react";
import useDeviceSize from "../utils/useDeviceSize";

const useStore = create((set) => ({
  productCount: 1,
  rankedProductCount: 1,
  setProductCount: (count) => set({ productCount: count }),
  setRankedProductCount: (count) => set({ rankedProductCount: count }),
}));

const getCountByDeviceSize = (
  isMobile,
  isTablet,
  isPC,
  mobileCount,
  tabletCount,
  pcCount,
) => {
  if (isMobile) {
    return mobileCount;
  } else if (isTablet) {
    return tabletCount;
  } else if (isPC) {
    return pcCount;
  }
};

export function useProductCountStore() {
  const { isMobile, isTablet, isPC } = useDeviceSize();
  const productCount = useStore((state) => state.productCount);
  const setProductCount = useStore((state) => state.setProductCount);

  useEffect(() => {
    const count = getCountByDeviceSize(isMobile, isTablet, isPC, 4, 6, 12);
    setProductCount(count);
  }, [isMobile, isTablet, isPC, setProductCount]);

  return productCount;
}

export function useRankedProductCountStore() {
  const { isMobile, isTablet, isPC } = useDeviceSize();
  const rankedProductCount = useStore((state) => state.rankedProductCount);
  const setRankedProductCount = useStore(
    (state) => state.setRankedProductCount,
  );

  useEffect(() => {
    const rankedCount = getCountByDeviceSize(isMobile, isTablet, isPC, 1, 2, 4);
    setRankedProductCount(rankedCount);
  }, [isMobile, isTablet, isPC, setRankedProductCount]);

  return rankedProductCount;
}
