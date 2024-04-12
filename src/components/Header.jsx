import React from "react";
import "./Header.css";
import longlogo from "../assets/long_logo.png";
import shortlogo from "../assets/short_logo.png";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Header-logo">
          <a href="./">
            <picture>
              <source srcSet={shortlogo} media="(max-width: 767px)" />
              <img className="Header-img" src={longlogo} alt="판다마켓 로고" />
            </picture>
          </a>
          <div className="Header-btn">
            <a href="#">자유게시판</a>
            <a href="#" className="active">
              중고마켓
            </a>
          </div>
        </div>
        <button className="Header-login-btn">로그인</button>
      </header>
    </>
  );
};

export default Header;
