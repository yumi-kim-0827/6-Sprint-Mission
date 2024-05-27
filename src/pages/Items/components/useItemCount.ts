import { useEffect, useState } from "react";

export default function useItemCount(): number {
  const [itemCount, setItemCount] = useState<number>(1);

  const updateItemCountOnResize = () => {
    const innerWidth: number = window.innerWidth;
    if (innerWidth >= 1200) {
      setItemCount(10);
    } else if (innerWidth >= 768) {
      setItemCount(6);
    } else {
      setItemCount(4);
    }
  };

  useEffect(() => {
    updateItemCountOnResize();
    window.addEventListener("resize", updateItemCountOnResize);
    return () => {
      window.removeEventListener("resize", updateItemCountOnResize);
    };
  }, []);

  return itemCount;
}
