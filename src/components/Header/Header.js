import React from "react";
import Button from "../Button/Button";
import "./Header.css";
import pandaLogo from "../../assets/images/panda_face.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const getLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--blue)" : "#4b5563",
    };
  };

  return (
    <header className="header">
      <div className="inner">
        <div className="left flex-center">
          <Link className="logo flex-center" to="/">
            <div className="logo-img mobile-hidden">
              <img src={pandaLogo} alt="판다마켓 로고 이미지" />
            </div>
            <span className="logo-text font-rokaf">판다마켓</span>
          </Link>

          <ul className="nav-list flex-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/free" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </div>

        <Button to="/signin">로그인</Button>
      </div>
    </header>
  );
};

export default Header;
