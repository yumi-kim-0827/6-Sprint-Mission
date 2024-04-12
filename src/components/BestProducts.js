import ItemCard from "./ItemCard";
import "./BestProducts.css";
import { useState, useEffect } from "react";

export default function BestProducts({ items }) {
  const [count, setCount] = useState(1);

  const setCountBasedOnWindowSize = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1024) {
      setCount(4);
      console.log("PC사이즈");
    }
    if (innerWidth >= 768 && innerWidth < 1024) {
      setCount(2);
      console.log("태블릿사이즈");
    }

    if (innerWidth < 768) {
      setCount(1);
      console.log("모바일사이즈");
    }
  };

  useEffect(() => {
    setCountBasedOnWindowSize();
    window.addEventListener("resize", setCountBasedOnWindowSize);
    return () => {
      window.removeEventListener("resize", setCountBasedOnWindowSize);
    };
  }, []);

  return (
    <>
      <div className="container-best-products">
        <h1>베스트 상품</h1>
        <div className="item-cards-container">
          {count === 1 ? (
            <ItemCard items={items} count={0} />
          ) : count === 2 ? (
            <>
              <ItemCard items={items} count={0} />
              <ItemCard items={items} count={1} />
            </>
          ) : count === 4 ? (
            <>
              <ItemCard items={items} count={0} />
              <ItemCard items={items} count={1} />
              <ItemCard items={items} count={2} />
              <ItemCard items={items} count={3} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
