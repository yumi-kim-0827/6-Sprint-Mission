import React from "react";
import panda_market_logo from "../image/panda_market_home_logo.png";
import "../css/header.css";

const Header = ({ pageName }) => {
  const currentPageBlueColor = {
    color: "#3692FF",
  };

  const checkCurrentPage = (currentPageName, menuName) => {
    if (currentPageName === menuName) {
      return true;
    } else {
      return false;
    }
  };
  // 이 currentPageBlueColor 객체와 checkCurrentPage을 Header 함수 밖에 선언하는 것과 안에 하는 것으 차이가 뭘까요?

  return (
    <header>
      <div className="header-content">
        <a href="/" className="panda-market-home-logo">
          <img src={panda_market_logo} alt="판다 마켓 로고" />
        </a>
        <div className="page-button">
          <a
            href="/"
            style={
              checkCurrentPage(pageName, "자유게시판")
                ? currentPageBlueColor
                : null
            }
          >
            자유게시판
          </a>
          <a
            href="/items"
            style={
              checkCurrentPage(pageName, "중고마켓") ? currentPageBlueColor : null
            }
          >
            중고마켓
          </a>
        </div>
        <a href="/" className="login-btn">
          로그인
        </a>

      </div>
    </header>
  );
};

export default Header;
