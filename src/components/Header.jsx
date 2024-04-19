import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="headerLeft">
        <Link to="/" className="headerLogo" aria-label="홈으로 이동">
          <img src={Logo} alt="판다마켓 홈" width="153" />
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/community"
                className="navLink"
                activeClassName="activeLink"
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className="navLink"
                style={{
                  color: ["/additem"].includes(location.pathname)
                    ? "#3692FF"
                    : "",
                }}
              >
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
