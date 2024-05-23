import { useEffect } from "react";
import { create } from "zustand";

import useDeviceSize from "../utils/useDeviceSize";

// 페이지 변경 시 동적으로 상품 개수들을 바꾸는 것이
// 페이지네이션과 다른 곳에서 사용되어 전역 상태로 만들었습니다.

// zustand를 위한 인터페이스
interface Count {
  productCount: number,
  rankedProductCount: number,
  setProductCount: (count:number) => void,
  setRankedProductCount: (count: number) => void
}

// 베스트 상품과 전체 상품의 개수를 나누었습니다.
const useStore = create<Count>((set) => ({
  productCount: 1,
  rankedProductCount: 1,
  setProductCount: (count: number) => set({ productCount: count }),
  setRankedProductCount: (count: number) => set({ rankedProductCount: count }),
}));

interface ItemCounts {
  mobile: number,
  tablet: number,
  pc: number
}

// Items Page에서 전체 상품 개수를 바꾸기 위한 객체입니다.
const allItemCounts = {
  mobile: 4,
  tablet: 6,
  pc: 10,
};

// Items Page에서 베스트 상품 개수를 바꾸기 위한 객체입니다.
const rankedItemCounts = {
  mobile: 1,
  tablet: 2,
  pc: 4,
};

// 모바일, 태블릿, PC기준으로 나누었습니다.
// 기준은 640px이하, 641~1024px, 1025px이상입니다.
const getCountByDeviceSize = (isMobile: boolean, isTablet: boolean, isPC: boolean, itemCounts: ItemCounts) => {
  if (isMobile) {
    return itemCounts.mobile;
  } else if (isTablet) {
    return itemCounts.tablet;
  } else if (isPC) {
    return itemCounts.pc;
  }
};

export function useProductCountStore() {
  const { isMobile, isTablet, isPC } = useDeviceSize();
  const productCount = useStore((state) => state.productCount);
  const setProductCount = useStore((state) => state.setProductCount);

  useEffect(() => {
    const count = getCountByDeviceSize(isMobile, isTablet, isPC, allItemCounts);
    if (count) setProductCount(count);
    
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
    const rankedCount = getCountByDeviceSize(
      isMobile,
      isTablet,
      isPC,
      rankedItemCounts,
    );
    if (rankedCount) setRankedProductCount(rankedCount);
  }, [isMobile, isTablet, isPC, setRankedProductCount]);

  return rankedProductCount;
}
