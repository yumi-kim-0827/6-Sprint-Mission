import React, { useEffect, useState } from "react";

import { getProducts } from "../../api";
import ProductItem from "../../components/ProductItem/ProductItem";
// style
import "./Market.css";
// image
import searchIcon from "../../assets/images/search_icon.svg";

const Market = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

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
          <div className="product-header-nav">
            <div className="search-box">
              <input placeholder="검색할 상품을 입력해주세요" />
              <div className="search-icon">
                <img src={searchIcon} alt="검색" />
              </div>
            </div>
            <a className="button" href="additem.html">
              상품 등록하기
            </a>
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
