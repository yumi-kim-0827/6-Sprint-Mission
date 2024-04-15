import React from 'react';
import "./NavigationBar.css"

function NavigationBar() {
  // const logoImgSrc = "../../public/images/logo-with-img.png"
  const logoImgSrc = process.env.PUBLIC_URL + '/images/logo-with-img.png';

  return (
    <div className="navigation-bar">
      <a href="./index.html">
        <img className="logo-with-img" src={logoImgSrc} alt="Logo" />
      </a>
      <div className="nav-links">
        <a className="nav-link">자유게시판</a>
        <a className="nav-link">중고마켓</a>
      </div>
      <a href="./signin.html">
        <button className="signin-button">로그인</button>
      </a>
    </div>
  );
}

export default NavigationBar;
