import React, { useState } from "react";
import "./Header.css";
import longlogo from "../../assets/long_logo.png";
import shortlogo from "../../assets/short_logo.png";
import { useLocation, Link, Location } from "react-router-dom";

const Header = (): JSX.Element => {
  const location: Location = useLocation();

  const isItemPage: boolean = location.pathname.startsWith("/Items") || location.pathname === "/additems";

  return (
    <>
      <header className="Header">
        <div className="Header-container">
          <Link to="/">
            <picture>
              <source srcSet={shortlogo} media="all and (max-width: 767px)" />

              <img className="Header-img" src={longlogo} alt="판다마켓 로고" />
            </picture>
          </Link>
          <ul className="Header-btn">
            <li href="#">자유게시판</li>
            <Link to="/Items">
              <li className={isItemPage ? "active" : ""}>중고마켓</li>
            </Link>
          </ul>
        </div>
        <Link to="/sign-in" className="Header-login-btn">
          로그인
        </Link>
      </header>
    </>
  );
};

export default Header;
