import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoOnly from "../assets/logo_only.svg";
import logoText from "../assets/logo_text.svg";
import Button from "./Button.jsx";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <Link to="/">
          <div className="Header__logoWrapper">
            <img
              src={logoOnly}
              className="Header__logo_mark"
              alt="판다마켓 로고"
            />
            <img
              src={logoText}
              className="Header__logo_text"
              alt="판다마켓 로고 텍스트"
            />
          </div>
        </Link>
        <div className="Header__gnb">
          <NavLink to={"/board"}>자유게시판</NavLink>
          <NavLink to={"/items"}>중고마켓</NavLink>
        </div>
        <div className="Header__buttonWrapper">
          <Button text="로그인" />
        </div>
      </div>
    </header>
  );
};

export default Header;
