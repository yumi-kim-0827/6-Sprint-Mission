import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { getProduct } from "../api";

function Button() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleLickClick = () => setOrder("favoriteCount");

  const handleLoad = async (orderQuery) => {
    const { reviews } = await getProduct(orderQuery);
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleLickClick}>좋아요 순</button>
      <ProductList items={sortedItems} />
    </div>
  );
}

export default Button;
