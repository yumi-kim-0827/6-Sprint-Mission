import { useEffect, useState } from "react";
import AllProductsSection from "../components/item/AllProductsSection.js";
import BestProductsSection from "../components/item/BestProductsSection.js";
import PageNation from "../components/item/PageNation.js";

function Item() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  // 브라우저 사이즈 확인
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <BestProductsSection size={size} />
      <AllProductsSection size={size} />
      <PageNation />
    </>
  );
}

export default Item;
