import React from "react";
import pandaLogo from "../image/panda_logo.svg";
import logo from "../image/logo.svg";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="Nav">
      <img className="panda_logo" src={pandaLogo} alt="판다로고"></img>
      <div className="links">
        <Link>자유게시판</Link>
        <Link className={pathName === "/items" ? "active" : ""} to={"/items"}>
          중고마켓
        </Link>
      </div>

      <img className="logo" src={logo} alt="상단로고"></img>
    </div>
  );
};

export default Nav;
