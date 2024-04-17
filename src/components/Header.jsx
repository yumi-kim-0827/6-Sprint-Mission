import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <ul>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/">자유게시판</Link>
        <Link to="/item">중고마켓</Link>
      </ul>
    </header>
  );
}

export default Header;
