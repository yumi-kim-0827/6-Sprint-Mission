import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { getBestProducts, getProducts } from "./Api";
import DropdownContainer from "./DropdownContainer";

function Items() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  // const [page, setPage] = useState(1);
  // const [size, setPageSize] = useState(12);
  const [keyword, setKeyword] = useState("");
  const [bestItems, setBestItems] = useState([]);

  // const handleSearch = async (searchValue) => {
  //   const products = await getProducts(order, searchValue);
  //   setItems(products);
  // };

  const handleLoad = async (order, keyword) => {
    const products = await getProducts(order, keyword);
    setItems(products);
  };

  const handleBestClick = () => setOrder("favorite");

  const handleNewestClick = () => setOrder("recent");

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleLoadBestItems = async () => {
    const bestProducts = await getBestProducts("favorite");
    const bestItemsLimited = bestProducts.slice(0, 4);
    setBestItems(bestItemsLimited);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoad(order, keyword);
  };

  useEffect(() => {
    handleLoad(order, keyword);
  }, [order]);

  useEffect(() => {
    handleLoadBestItems();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>베스트 상품</h1>
      <Products items={bestItems} />
      <div>
        <h1>전체 상품</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="검색할 상품을 입력해주세요"
          />
          <button type="submit">검색</button>
        </form>
        <button>상품 등록하기</button>
        <DropdownContainer
          onNewestClick={handleNewestClick}
          onBestClick={handleBestClick}
        />
        <Products items={items} />
      </div>
    </div>
  );
}

export default Items;
