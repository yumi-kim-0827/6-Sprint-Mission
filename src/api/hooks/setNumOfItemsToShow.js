import { useEffect, useState } from "react";

export default function useSetNumOfItemsToShow({ bestProducts, Products }) {
  const [bestProductsNumOfItemsToShow, setBestProductsNumOfItemsToShow] =
    useState(bestProducts[2]);
  const [ProductsNumOfItemsToShow, setProductsNumOfItemsToShow] = useState(
    Products[2]
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

  return [bestProductsNumOfItemsToShow,ProductsNumOfItemsToShow]
}
