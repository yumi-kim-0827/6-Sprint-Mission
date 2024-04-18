import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Header.css";

function linkStyle({ isActive }) {
  return { color: isActive ? "#3692ff" : undefined };
}

function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/" className="headerLogo" aria-label="홈으로 이동">
          <img src={Logo} alt="판다마켓 홈" width="153" />
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink to="/community" style={linkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={linkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/login" className="loginLink button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
