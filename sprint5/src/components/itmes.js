import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductMenu from "./ProductMenu";
import Products from "./Products";
import { getProducts } from "./Api";

function Items() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [bestItems, setBestItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("favoriteCount");

  const handleLoadBestItems = async () => {
    const bestProducts = await getProducts("favoriteCount");
    const bestItemsLimited = bestProducts.slice(0, 4);
    setBestItems(bestItemsLimited);
  };

  useEffect(() => {
    handleLoadBestItems();
  }, []);

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
      <Products items={bestItems} />
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
