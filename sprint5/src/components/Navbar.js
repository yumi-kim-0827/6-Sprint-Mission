import React from "react";
import logoImg from "../assets/logo.svg";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/" className="logo">
          <img id="logo-img" alt="panda-market" src={logoImg} />
        </a>
        <a>자유게시판</a>
        <a>중고마켓</a>
      </div>
      <div>
        <button>로그인</button>
      </div>
    </nav>
  );
}

export default Navbar;
