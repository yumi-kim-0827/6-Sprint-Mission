import React, { useState, useEffect } from "react";
import { products } from "../server/api";
import "./style.css";
import LogoImg from "../images/Group 19.png";
import ProductList from "./ProductList";
import ipad from "../images/ipad.png";
import note from "../images/note.png";
import oven from "../images/oven.png";
import washing from "../images/washing.png";
import Vector from "../images/Vector.png";
import down from "../images/down.png";

function Item() {
  const [productData, setProductData] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const productList = await products(order);
      setProductData(productList.list);
    }
    fetchData();
  }, [order]);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSortChange = (newOrder) => {
    setOrder(newOrder);
    setOpen(false);
  };

  function handleLoginClick() {
    window.location.href = "/login";
  }

  return (
    <div>
      <div className="top-banner">
        <img src={LogoImg} alt="logoImg" className="panda-logo" />
        <a href="/freeboard" className="top-banner-menu">
          자유게시판
        </a>
        <a href="/item" className="top-banner-menu">
          중고마켓
        </a>
        <button onClick={handleLoginClick} className="login-button">
          로그인
        </button>
      </div>
      <div className="main-banner">
        <div className="best-product">
          <h2 className="best-product text">베스트 상품</h2>
          <div className="best-product-container">
            <img src={ipad} alt="ipadImg" className="best-product-img" />
            <img src={note} alt="noteImg" className="best-product-img" />
            <img src={oven} alt="ovenImg" className="best-product-img" />
            <img src={washing} alt="washingImg" className="best-product-img" />
          </div>
        </div>
        <div className="all-product-menu">
          <h2>전체 상품</h2>

          <div className="all-product-right-menu">
            <div className="search-input-container">
              <input
                className="search-input"
                placeholder="검색할 상품을 입력해주세요"
              />
              <img src={Vector} alt="reading-glasses" />
            </div>
            <button className="register-product">상품등록하기</button>
            <div className="dropdown">
              <div className="dropdown-btn" onClick={toggleDropdown}>
                {order === "createdAt" ? "최신순" : "좋아요순"}
                <img src={down} alt="down" />
              </div>
              {open && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleSortChange("createdAt")}>최신순</li>
                  <li onClick={() => handleSortChange("favoriteCount")}>
                    좋아요순
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="all-products-img">
          <ProductList products={productData} />
        </div>
      </div>
    </div>
  );
}

export default Item;
