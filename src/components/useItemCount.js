import { useEffect, useState } from "react";

export default function useItemCount() {
  const [itemCount, setItemCount] = useState(1);

  const updateItemCountOnResize = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1024) {
      setItemCount(4);
    } else if (innerWidth >= 768) {
      setItemCount(2);
    } else {
      setItemCount(1);
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
