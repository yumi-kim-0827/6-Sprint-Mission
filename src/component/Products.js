import React from "react";
import { useEffect, useState } from "react";
import { get_products } from "./api";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/products.css";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [showSelectBox, setShowSelectBox] = useState(false);

  const handleLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await get_products();
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { list, totalCount } = result;
    setProducts(list);
  };
  const handleSelectButton = ()=>{
    setShowSelectBox(!showSelectBox);
  }

  useEffect(() => {
    handleLoad();
  }, []);

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
          <a className="register-product-btn" href="/additem">
            상품 등록하기
          </a>
          <div className="product-sort-select">
            <button className="product-sort-select-btn" onClick={handleSelectButton}>
              {order === "createdAt" ? "최신순" : "좋아요순"}
            </button>
            {showSelectBox ? (
              <ul className="product-sort-select-option-list">
                <li>최신순</li>
                <li>좋아요순</li>
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
          products.map((product) => {
            return <ProductElement key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
