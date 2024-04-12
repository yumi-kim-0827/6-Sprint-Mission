import ItemCard from "./ItemCard";
import "./BestProducts.css";
import { useState, useEffect } from "react";

export default function BestProducts({ items }) {
  const [count, setCount] = useState(1);

  const setCountBasedOnWindowSize = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1024) {
      setCount(4);
    }
    if (innerWidth >= 768 && innerWidth < 1024) {
      setCount(2);
    }

    if (innerWidth < 768) {
      setCount(1);
    }
  };

  useEffect(() => {
    setCountBasedOnWindowSize();
    window.addEventListener("resize", setCountBasedOnWindowSize);
    return () => {
      window.removeEventListener("resize", setCountBasedOnWindowSize);
    };
  }, []);

  const bestItems = items
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .filter((item, index) => index < 4);

  return (
    <>
      <div className="container-best-products">
        <h1>베스트 상품</h1>
        <div className="item-cards-container">
          {count === 1 ? (
            <ItemCard items={bestItems} count={0} />
          ) : count === 2 ? (
            <>
              <ItemCard items={bestItems} count={0} />
              <ItemCard items={bestItems} count={1} />
            </>
          ) : count === 4 ? (
            <>
              <ItemCard items={bestItems} count={0} />
              <ItemCard items={bestItems} count={1} />
              <ItemCard items={bestItems} count={2} />
              <ItemCard items={bestItems} count={3} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
