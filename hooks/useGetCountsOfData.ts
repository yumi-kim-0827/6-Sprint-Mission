/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface useGetCountsOfDataProps {
  desktop: number;
  tablet: number;
  mobile: number;
}

const getWindowSize = (ItemsCount: number[]) => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 375) {
      return ItemsCount[2];
    } else if (window.innerWidth < 768) {
      return ItemsCount[1];
    } else {
      return ItemsCount[0];
    }
  }
  return ItemsCount[0];
};

export default function useGetCountsOfData({
  desktop,
  tablet,
  mobile,
}: useGetCountsOfDataProps): number {
  const itemsCounts = [desktop, tablet, mobile];
  const [itemsCount, setItemsCount] = useState<number>(
    getWindowSize(itemsCounts)
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsCount(getWindowSize(itemsCounts));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return itemsCount;
}
