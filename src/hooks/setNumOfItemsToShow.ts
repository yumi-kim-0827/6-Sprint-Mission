import { useEffect, useState } from "react";
const firstWindowSize = () => {
  let firstSize = 2;
  if (window.innerWidth < 768) {
    firstSize = 0;
  } else if (window.innerWidth <= 1024) {
    firstSize = 1;
  } else {
    firstSize = 2;
  }
  return firstSize;
};
export default function useSetNumOfItemsToShow({
  bestProducts,
  Products,
}: {
  bestProducts: number[];
  Products: number[];
}) {
  const [bestProductsNumOfItemsToShow, setBestProductsNumOfItemsToShow] =
    useState(bestProducts[firstWindowSize()]);
  const [ProductsNumOfItemsToShow, setProductsNumOfItemsToShow] = useState(
    Products[firstWindowSize()]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBestProductsNumOfItemsToShow(1);
        setProductsNumOfItemsToShow(4);
      } else if (window.innerWidth <= 1024) {
        setBestProductsNumOfItemsToShow(2);
        setProductsNumOfItemsToShow(6);
      } else {
        setBestProductsNumOfItemsToShow(4);
        setProductsNumOfItemsToShow(10);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [bestProductsNumOfItemsToShow, ProductsNumOfItemsToShow];
}
