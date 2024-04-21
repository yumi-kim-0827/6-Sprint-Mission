import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProducts } from "../Api";

function Items() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const sortedItems = [...items].sort((a, b) => b[order] - a[order]);

  const handleNewstClick = () => setOrder("createdAt");
  const handlefavoriteClick = () => setOrder("favoriteCount");

  const handleLoad = async (orderQuery) => {
    try {
      const products = await getProducts(orderQuery);
      setItems(products.list);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewstClick}>최신순</button>
        <button onClick={handlefavoriteClick}>좋아요순</button>
      </div>
      <ProductList items={sortedItems} />
    </div>
  );
}

export default Items;
