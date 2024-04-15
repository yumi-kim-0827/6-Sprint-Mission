import React from "react";
import HomeIcon from "../logo/pandaLogo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navBar">
      <a href="#">
        <img className="homeIcon" src={HomeIcon} alt="판다마켓" />
      </a>
      <div className="nav-links">
        <a className="nav-link">자유게시판</a>
        <a className="nav-link">중고마켓</a>
      </div>
      <a href="#">
        <button className="signin-button">로그인</button>
      </a>
    </div>
  );
};

export default Nav;
