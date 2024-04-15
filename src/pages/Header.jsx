import React, { useState } from "react";
import "./Header.css";
import longlogo from "../assets/long_logo.png";
import shortlogo from "../assets/short_logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isItemPage = location.pathname === "/Items";

  const goItems = () => {
    navigate("./Items");
  };

  const goRoot = () => {
    navigate("./");
  };

  return (
    <>
      <header className="Header">
        <div className="Header-logo">
          <picture>
            <source srcSet={shortlogo} media="(max-width: 767px)" />
            <img onClick={goRoot} className="Header-img" src={longlogo} alt="판다마켓 로고" />
          </picture>
          <ul className="Header-btn">
            <li href="#">자유게시판</li>
            <li onClick={goItems} className={isItemPage ? "active" : ""}>
              중고마켓
            </li>
          </ul>
        </div>
        <button className="Header-login-btn">로그인</button>
      </header>
    </>
  );
};

export default Header;
