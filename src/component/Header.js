import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import panda_market_logo from "../image/panda_market_home_logo.png";
import "../css/header.css";

const Header = () => {
  const location = useLocation();

  const currentPageBlueColor = (paths) => {
    for (let path of paths) {
      if (path === location.pathname) {
        return { color: "#3692FF" };
      }
    }
  };
  //additem 페이지에도 중고마켓 글자를 파랗게 하는 요구 사항을 위해
  // 이런 코드를 작성했는데 괜찮은 코드인가요

  return (
    <header>
      <div className="header-content">
        <Link to="/" className="panda-market-home-logo">
          <img src={panda_market_logo} alt="판다 마켓 로고" />
        </Link>
        <div className="page-button">
          <NavLink
            to="/"
            style={currentPageBlueColor(["/"])}
            className="navLink"
          >
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            style={currentPageBlueColor(["/items", "/additem"])}
            className="navLink"
          >
            중고마켓
          </NavLink>
        </div>
        <Link to="/" className="login-btn">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
