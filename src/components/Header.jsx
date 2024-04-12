import React from "react";
import logoOnly from "../assets/logo_only.svg";
import logoText from "../assets/logo_text.svg";
import Button from "./Button.jsx";
import "../styles/Header.css";

const Header = ({ navSelected, navClickHandler }) => {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logoWrapper">
          <img
            src={logoOnly}
            className="Header__logo_mark"
            alt="판다마켓 로고"
          />
          <img
            src={logoText}
            className="Header__logo_text"
            alt="판다마켓 로고 텍스트"
          />
        </div>
        <div className="Header__gnb">
          <button
            href={"#"}
            className={navSelected === "자유게시판" ? "selected" : ""}
            onClick={() => {
              navClickHandler("자유게시판");
            }}
          >
            자유게시판
          </button>
          <button
            href={"#"}
            className={navSelected === "중고마켓" ? "selected" : ""}
            onClick={() => {
              navClickHandler("중고마켓");
            }}
          >
            중고마켓
          </button>
        </div>
        <div className="Header__buttonWrapper">
          <Button text="로그인" />
        </div>
      </div>
    </header>
  );
};

export default Header;
