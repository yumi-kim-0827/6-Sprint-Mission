import React, { useEffect, useState } from "react";

import { getProducts } from "../../api";
import Button from "../../components/Button/Button";
import ProductItem from "../../components/ProductItem/ProductItem";
// style
import "./Market.css";
import "../../components/SearchBox/SearchBox.css";
import SearchBox from "../../components/SearchBox/SearchBox";

const Market = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // 상품 검색 기능
  const searchProducts = async (event) => {
    const { value } = event.target;
    const items = await getProducts("recent", value);
    const { list } = items;
    setAllProducts(list);
  };

  // 상품 리스트 불러오기
  const getItems = async (sort, setState) => {
    const items = await getProducts(sort);
    const { list } = items;
    setState(list);
  };

  useEffect(() => {
    getItems("favorite", setBestProducts);
    getItems("recent", setAllProducts);
  }, []);

  return (
    <div className="container market-page">
      {/* 베스트 상품 */}
      <section className="best-product">
        <h3 className="title">베스트 상품</h3>
        <ul className="product-list">
          {bestProducts.map((product) => {
            return (
              <li className="product-item" key={product.id}>
                <ProductItem item={product} />
              </li>
            );
          })}
        </ul>
      </section>

      {/* 전체 상품 */}
      <section className="all-product">
        <div className="product-list-header">
          <h3 className="title">전체 상품</h3>
          <div className="product-header-nav flex-center">
            <SearchBox
              onInput={searchProducts}
              placeholder="검색할 상품을 입력해주세요"
            />
            <Button href="additem.html">상품 등록하기</Button>
            <div className="select-box">
              <button className="label">최신순</button>
              <ul className="option-list">
                <li className="option-item">최신순</li>
                <li className="option-item">좋아요순</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="product-list">
          {allProducts.map((product) => {
            return (
              <li className="product-item" key={product.id}>
                <ProductItem item={product} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Market;
