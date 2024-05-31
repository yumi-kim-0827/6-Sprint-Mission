import React from "react";
import pandaLogo from "../image/panda_logo.svg";
import logo from "../image/logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav_left">
        <img className="panda_logo" src={pandaLogo} alt="판다로고"></img>
        <Link>
          <span>자유게시판</span>
        </Link>
        <Link to={"/items"}>
          <h3>중고마켓</h3>
        </Link>
      </div>

      <img className="logo" src={logo} alt="상단로고"></img>
    </div>
  );
};

export default Nav;
