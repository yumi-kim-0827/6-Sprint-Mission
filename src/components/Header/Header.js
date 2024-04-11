import React from "react";
import "./Header.css";
import pandaLogo from "../../assets/images/panda_face.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <a className="logo flex-center" href="/">
          <div className="logo-img mobile-hidden">
            <img src={pandaLogo} alt="판다마켓 로고 이미지" />
          </div>
          <span className="logo-text font-rokaf">판다마켓</span>
        </a>

        <a className="button" href="login.html">
          로그인
        </a>
      </div>
    </header>
  );
};

export default Header;
