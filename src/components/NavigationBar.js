import React from 'react';
import "./NavigationBar.css"
import { Link, NavLink } from 'react-router-dom';

function NavigationBar() {
  // const logoImgSrc = "../../public/images/logo-with-img.png"
  const logoImgSrc = process.env.PUBLIC_URL + '/images/logo-with-img.png';

  return (
    <div className="navigation-bar">
      <a href="./index.html">
        <img className="logo-with-img" src={logoImgSrc} alt="Logo" />
      </a>
      <div className="nav-links">
        <NavLink to="/community" className="nav-link">자유게시판</NavLink>
        <NavLink to="/items" className="nav-link">중고마켓</NavLink>
        {/* <a className="nav-link">자유게시판</a>
        <a className="nav-link">중고마켓</a> */}
      </div>

      {/* <a href="./signin.html">
        <button className="signin-button">로그인</button>
      </a> */}
      <Link to="/login" className="signin-button">
        로그인
      </Link>
    </div>
  );
}

export default NavigationBar;
