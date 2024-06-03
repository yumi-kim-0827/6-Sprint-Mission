import React from "react";
import Button from "./Button";
import "./Header.css";

const Header = ({ handleButtonSubmit }) => {
  return (
    <div className="Header">
      <h1>상품 등록하기</h1>
      <Button handleButtonSubmit={handleButtonSubmit} />
    </div>
  );
};

export default Header;
