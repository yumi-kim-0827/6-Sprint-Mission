import React from "react";
import { Link } from "react-router-dom";
import { Logo, LogoWords } from "./Logo";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <Logo />
          <LogoWords />
        </Link>
        <ul className="nav__ul">
          <li>
            <Link to="/">자유게시판</Link>
          </li>
          <li>
            <Link to="/item">중고마켓</Link>
          </li>
        </ul>
        <button>로그인</button>
      </nav>
    </header>
  );
}

export default Header;
