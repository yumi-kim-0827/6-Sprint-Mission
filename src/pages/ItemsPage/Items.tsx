import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import { getBestProducts, getProducts } from "../../api/Api";
import DropdownContainer from "../../components/UI/DropdownContainer";
import PaginationButton from "../../components/UI/PaginationButton";
import useResizeHandler from "../../hooks/useResizeHandler";
import { ItemProps } from "./Products";
import "./Items.css";

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
  const [items, setItems] = useState<ItemProps[]>([]);
  const [order, setOrder] = useState<string>("recent");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(getLimit());
  const [totalPages, setTotalPages] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>("");
  const [bestItems, setBestItems] = useState<ItemProps[]>([]);

  interface handleLodaProps {
    page: number;
    limit: number;
    order: string;
    keyword: string;
  }

  const handleLoad = async ({
    page,
    limit,
    order,
    keyword,
  }: handleLodaProps) => {
    const products = await getProducts({ page, limit, order, keyword });

    setItems(products.list);
    setTotalPages(Math.ceil(products.totalCount / limit));
  };

  const handleLoadBestItems = async () => {
    let bestItemsCount;
    const width = window.innerWidth;
    const bestProducts = await getBestProducts("favorite");
    if (width < 768) {
      bestItemsCount = 1;
    } else if (width < 1280) {
      bestItemsCount = 2;
    } else {
      bestItemsCount = 4;
    }
    const bestItemsLimited = bestProducts.slice(0, bestItemsCount);
    setBestItems(bestItemsLimited);
  };
  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleBestClick = () => setOrder("favorite");

  const handleNewestClick = () => setOrder("recent");

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLoad({ page, limit, order, keyword });
  };

  useEffect(() => {
    handleLoad({ page, limit, order, keyword });
  }, [page, limit, order]);

  useEffect(() => {
    handleLoadBestItems();
  }, []);

  const handleResize = () => {
    handleLoadBestItems();
    setLimit(getLimit());
  };

  useResizeHandler(handleResize, 500);

  return (
    <div>
      <main className="items-container">
        <section className="items-wrapper">
          <h1 className="product-menu-title">베스트 상품</h1>
          <Products items={bestItems} type="best" />
          <div>
            <div className="all-product-menu">
              <h1 className="product-menu-title">전체 상품</h1>
              <div className="all-product-menu-items">
                <form onSubmit={handleSubmit}>
                  <input
                    className="search-input"
                    name="keyword"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="검색할 상품을 입력해주세요"
                  />
                  <button type="submit" style={{ display: "none" }}>
                    검색
                  </button>
                </form>
                <Link to={"/additem"}>
                  <button className="add-product-button">상품 등록하기</button>
                </Link>
                <DropdownContainer
                  onNewestClick={handleNewestClick}
                  onBestClick={handleBestClick}
                />
              </div>
            </div>

            <Products items={items} type="all" />
          </div>
          <div className="pagination-buttons">
            <PaginationButton
              totalPageNum={totalPages}
              activePageNum={page}
              onPageChange={onPageChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Items;
