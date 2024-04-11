import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductMenu from "./ProductMenu";
import Products from "./Products";
import { getProducts } from "./Api";

function Items() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItems(products);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <Navbar />
      <ProductMenu title={"베스트 상품"} />
      <ProductMenu
        title={"전체 상품"}
        button
        dropdown
        handleNewestClick={handleNewestClick}
        handleBestClick={handleBestClick}
      />
      <Products items={sortedItems} />
    </div>
  );
}

export default Items;
