import React from "react";
import logoImg from "../assets/Group 19.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/" className="logo">
          <img id="logo-img" alt="panda-market" src={logoImg} />
        </a>
        <Button text="자유게시판" link="" />
        <Button text="중고마켓" link="/items" />
      </div>
      <div>
        <Button text="로그인" link="/signin" />
      </div>
    </nav>
  );
}

export default Navbar;
