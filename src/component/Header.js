import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import panda_market_logo from "../image/panda_market_home_logo.png";
import "../css/header.css";
import userIcon from "../image/ic_user.png";

const Header = () => {
  const location = useLocation();

  const currentPageBlueColor = (paths) => {
    return paths.some(path => path === location.pathname) ? { color: "#3692FF" } : null;
  };

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
        {location.pathname === "/additem" ? (
          <img src={userIcon} className="user-icon" alt="유저 아이콘"/>
        ) : (
          <Link to="/" className="login-btn">
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
