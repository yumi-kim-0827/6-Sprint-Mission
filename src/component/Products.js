import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
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
  const [numOfItemsToShow, setNumOfItemsToShow] = useState(10);
  const showedProducts = products.slice(0, numOfItemsToShow)
  
  const sortByOrder = (products) => {
    return products.sort((a, b) => {
      if (order === "createdAt") return new Date(b[order]) - new Date(a[order]);
      else return b[order] - a[order];
    });
  };

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
    const { list } = result;
    setProducts(sortByOrder(list));
  };

  const handleSelectButton = () => {
    setShowSelectBox(!showSelectBox);
  };
  const handleSelectOption = (selectedOrder) => {
    setOrder(selectedOrder);
    setShowSelectBox(false);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumOfItemsToShow(4);
      } else if (window.innerWidth <= 1024) {
        setNumOfItemsToShow(6);
      } else {
        setNumOfItemsToShow(10);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
          showedProducts.map((product) => {
            return <ProductElement key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
