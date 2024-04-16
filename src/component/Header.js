import React from "react";
import { Link, NavLink } from "react-router-dom";
import panda_market_logo from "../image/panda_market_home_logo.png";
import "../css/header.css";

const Header = () => {
  
  const currentPageBlueColor = ({isActive}) => {
    return { color: isActive ? "#3692FF" : undefined };
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
            style={currentPageBlueColor}
            className="navLink"
          >
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            style={currentPageBlueColor}
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
