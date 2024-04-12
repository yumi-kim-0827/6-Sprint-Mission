import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductMenu from "./ProductMenu";
import Products from "./Products";
import { getProducts } from "./Api";

//아이템 상태
function Items() {
  const [items, setItems] = useState([]);

  const handleSearch = async (searchValue) => {
    const products = await getProducts(order, page, size, searchValue);
    setItems(products);
  };

  const handleLoad = async (order, page, size, searchValue) => {
    const products = await getProducts(order, page, size, searchValue);
    setItems(products);
  };

  //드롭다운 정렬
  const [order, setOrder] = useState("recent");

  const handleBestClick = () => setOrder("favorite");

  const handleNewestClick = () => setOrder("recent");

  //페이지네이션
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(12);

  useEffect(() => {
    handleLoad(order, page, size);
  }, [order, page, size]);

  //베스트 4개
  const [bestItems, setBestItems] = useState([]);

  const handleLoadBestItems = async () => {
    const bestProducts = await getProducts("favorite");
    const bestItemsLimited = bestProducts.slice(0, 4);
    setBestItems(bestItemsLimited);
  };

  useEffect(() => {
    handleLoadBestItems();
  }, []);

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
      <Products items={items} />
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default Items;
