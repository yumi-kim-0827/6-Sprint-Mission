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
    </div>
  );
};

export default Market;
