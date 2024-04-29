import "./ProductAll.css";

import iconSearch from "../../../assets/images/items/ic_search.svg";

import React, { useState, useEffect } from "react";

import { getProducts } from "../../../api/product.api";
import { Link } from "react-router-dom";
import { Desktop, Mobile, Tablet } from "../../MediaQuery";
import Dropdown from "./Dropdown";
import Product from "./Product";

const ProductAll = () => {
  const [order, setOrder] = useState("recent");

  const [products, setProducts] = useState([]);

  const handleLoad = async (orderQuery) => {
    const { list } = await getProducts({ orderBy: orderQuery });
    setProducts(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  const handleChange = (value) => {
    setOrder(value);
  };

  return (
    <>
      <div className="all_top_warp">
        <Desktop>
          <span className="all_title">전체 상품</span>
        </Desktop>
        <Tablet>
          <span className="all_title">판매중인 상품</span>
        </Tablet>
        <Mobile>
          <span className="all_title">판매중인 상품</span>
        </Mobile>

        <div className="all_search_wrap">
          <img className="all_search_icon" src={iconSearch} alt="icon_search" />
          <input
            className="all_search"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>

        <Link to={"/addItem"} className="all_add_item blue">
          상품 등록하기
        </Link>

        <div className="all_sort_wrap">
          <Dropdown
            options={[
              {
                label: "최신순",
                value: "recent",
              },
              {
                label: "좋아요순",
                value: "favorite",
              },
            ]}
            className="custom-dropdown"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="all_content">
        <Desktop>
          {products.slice(0, 12).map((product) => (
            <Product product={product} isAllSection={true} key={product.id} />
          ))}
        </Desktop>

        <Tablet>
          {products.slice(0, 6).map((product) => (
            <Product product={product} isAllSection={true} key={product.id} />
          ))}
        </Tablet>

        <Mobile>
          {products.slice(0, 4).map((product) => (
            <Product product={product} isAllSection={true} key={product.id} />
          ))}
        </Mobile>
      </div>
    </>
  );
};

export default ProductAll;
