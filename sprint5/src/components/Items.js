import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { getBestProducts, getProducts } from "./Api";
import DropdownContainer from "./DropdownContainer";
import PaginationButton from "./PaginationButton";

const getLimit = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 10;
  }
};

function Items() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(getLimit());
  const [totalPages, setTotalPages] = useState();
  const [keyword, setKeyword] = useState("");
  const [bestItems, setBestItems] = useState([]);

  //데이터 가져오기
  const handleLoad = async (page, limit, order, keyword) => {
    const products = await getProducts(page, limit, order, keyword);
    //데이터 저장
    console.log(products.totalCount);
    setItems(products.list);
    //페이지 길이
    setTotalPages(Math.ceil(products.totalCount / limit));
    console.log(totalPages);
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleBestClick = () => setOrder("favorite");

  const handleNewestClick = () => setOrder("recent");

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleLoadBestItems = async () => {
    const bestProducts = await getBestProducts("favorite");
    const bestItemsLimited = bestProducts.slice(0, 4);
    setBestItems(bestItemsLimited);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLoad(page, limit, order, keyword);
  };

  useEffect(() => {
    const handleResize = () => {
      setLimit(getLimit());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [page, limit, order, keyword]);

  useEffect(() => {
    handleLoadBestItems();
  }, []);

  useEffect(() => {
    handleLoad(page, limit, order, keyword);
  }, [page, limit, order]);

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
        <div>
          <PaginationButton
            totalPageNum={totalPages}
            activePageNum={page}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
