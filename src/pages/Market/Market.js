import React, { useEffect, useState } from "react";

import { getProducts } from "../../api";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import SelectBox from "../../components/SelectBox/SelectBox";
import ProductItem from "../../components/ProductItem/ProductItem";
// style
import "./Market.css";
import "../../components/SearchBox/SearchBox.css";

const Market = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [sortKeyword, setSortKeyword] = useState("최신순");
  const [optionList, setOptionList] = useState("");

  const sortOptions = [
    {
      text: "최신순",
      sort: "recent",
    },
    {
      text: "좋아요순",
      sort: "favorite",
    },
  ];

  // 상품 검색 기능
  const searchProducts = async (event) => {
    const { value } = event.target;
    const items = await getProducts({ keyword: value });
    const { list } = items;
    setAllProducts(list);
  };

  // 상품 정렬 옵션 선택 기능
  const handleSelectOptionClick = async (event) => {
    let sortOption;
    const { textContent } = event.target;
    sortOptions.forEach((option) => {
      const { text, sort } = option;
      if (textContent === text) {
        setSortKeyword(text);
        sortOption = sort;
      }
    });
    const items = await getProducts({ orderBy: sortOption });
    const { list } = items;
    setAllProducts(list);
    handleSelectBoxClick();
  };

  // 옵션 리스트 토글 기능
  const handleSelectBoxClick = () => {
    if (optionList === "") {
      setOptionList("show");
    } else {
      setOptionList("");
    }
  };

  // 상품 리스트 불러오기
  const getItems = async (sort, setState) => {
    const items = await getProducts({ orderBy: sort });
    let { list } = items;
    if (sort === "favorite") {
      list = list.filter((item, index) => {
        return index < 4;
      });
    }
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
              onChange={searchProducts}
              placeholder="검색할 상품을 입력해주세요"
            />
            <Button href="additem.html">상품 등록하기</Button>
            <SelectBox
              text={sortKeyword}
              onOptionClick={handleSelectOptionClick}
              onBoxClick={handleSelectBoxClick}
              optionClass={optionList}
              options={sortOptions}
            />
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
