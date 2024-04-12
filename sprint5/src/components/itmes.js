import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductMenu from "./ProductMenu";
import Products from "./Products";
import { getProducts } from "./Api";

//아이템 상태
function Items() {
  const [items, setItems] = useState([]);

  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItems(products);
  };

  //드롭다운 정렬
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleBestClick = () => setOrder("favoriteCount");

  const handleNewestClick = () => setOrder("createdAt");

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  //베스트 4개
  const [bestItems, setBestItems] = useState([]);

  const handleLoadBestItems = async () => {
    const bestProducts = await getProducts("favoriteCount");
    const bestItemsLimited = bestProducts.slice(0, 4);
    setBestItems(bestItemsLimited);
  };

  useEffect(() => {
    handleLoadBestItems();
  }, []);

  //검색기능
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchValue) => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  };

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
        search
        handleSearch={handleSearch}
      />
      <Products
        items={searchResults.length > 0 ? searchResults : sortedItems}
      />
    </div>
  );
}

export default Items;
