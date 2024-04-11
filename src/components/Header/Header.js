import React from "react";
import "./Header.css";
import pandaLogo from "../../assets/images/panda_face.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="left flex-center">
          <a className="logo flex-center" href="/">
            <div className="logo-img mobile-hidden">
              <img src={pandaLogo} alt="판다마켓 로고 이미지" />
            </div>
            <span className="logo-text font-rokaf">판다마켓</span>
          </a>

          <ul className="nav-list flex-center">
            <li className="nav-item">
              <a className="nav-link" href="">
                자유게시판
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                중고마켓
              </a>
            </li>
          </ul>
        </div>

        <Button href="login.html">로그인</Button>
      </div>
    </header>
  );
};

export default Header;
