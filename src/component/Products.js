import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get_products } from "../api/api";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/products.css";

const Products = ({numOfItemsToShow}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const showedProducts = products.slice(0, numOfItemsToShow);

  //상품 가져오기
  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products({
        orderBy: order,
        pageSize: numOfItemsToShow,
        page: pageNumber,
      });
      const { list } = result;
      setProducts(list);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  //정렬 버튼 열기
  const handleSelectButton = () => {
    setShowSelectBox(!showSelectBox);
  };
  //정렬 선택하기
  const handleSelectOption = (selectedOrder) => {
    setOrder(selectedOrder);
    setShowSelectBox(false);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order, pageNumber]);

 

  return (
    <div className="products-section">
      <div className="products-header">
        <span className="products-title">전체 상품</span>
        <div className="products-sort-section">
          <form>
            <input
              name="search"
              className="search-input"
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
          <Link className="register-product-btn" to="/additem">
            상품 등록하기
          </Link>
          <div className="product-sort-select">
            <button
              className="product-sort-select-btn"
              onClick={handleSelectButton}
            >
              {order === "createdAt" ? "최신순" : "좋아요순"}
            </button>
            {showSelectBox ? (
              <ul className="product-sort-select-option-list">
                <li
                  onClick={() => {
                    handleSelectOption("createdAt");
                  }}
                >
                  최신순
                </li>
                <li
                  onClick={() => {
                    handleSelectOption("favoriteCount");
                  }}
                >
                  좋아요순
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="products-content">
        {isLoading ? (
          <IsLoading />
        ) : loadingError ? (
          <FailLoading />
        ) : (
          showedProducts.map((product) => (
            <ProductElement key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
