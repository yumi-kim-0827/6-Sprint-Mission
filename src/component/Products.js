import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductElement from "./ProductElement";
import IsLoading from "./IsLoading";
import FailLoading from "./FailLoading";
import "../css/products.css";
import useLoading from "../api/hooks/loading";
import SelectOrderButton from "./SelectOrderButton";

const Products = ({ numOfItemsToShow }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, loadingError, handleLoad] = useLoading();
  const showedProducts = products.slice(0, numOfItemsToShow);

  //상품 가져오기
  const handleProductsLoad = async () => {
    const result = await handleLoad({
      orderBy: order,
      pageSize: numOfItemsToShow,
      page: pageNumber,
    });
    console.log(result);
    setProducts(result);
  };

  //정렬 선택하기
  const handleSelectOption = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  useEffect(() => {
    handleProductsLoad();
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
          <SelectOrderButton handleSelectOption={handleSelectOption} currentOrder={order}/>
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
