import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductMenu from "./ProductMenu";
import Products from "./Products";
import { getProducts } from "./Api";

//아이템 상태
function Items() {
  const [items, setItems] = useState([]);

  const handleLoad = async (orderQuery, startIndex = 0, itemsPerPage = 6) => {
    const products = await getProducts(orderQuery, startIndex, itemsPerPage);
    setItems(products);
  };

  //드롭다운 정렬
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleBestClick = () => {
    setOrder("favoriteCount");
    setCurrentPage(1);
  };

  const handleNewestClick = () => {
    setOrder("createdAt");
    setCurrentPage(1);
  };

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
    setCurrentPage(1);
  };

  //페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(
    (searchResults.length > 0 ? searchResults.length : sortedItems.length) /
      itemsPerPage
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems =
    searchResults.length > 0
      ? searchResults.slice(startIndex, endIndex)
      : sortedItems.slice(startIndex, endIndex);

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
      <Products items={currentItems} />
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageClick(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Items;
