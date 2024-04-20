import React from "react";
import "../AddItemPage.css";

const buttonStyle = {
  width: "88px",
  height: "42px",
  padding: "12px 20px",
  borderRadius: "8px",
  backgroundColor: "#9CA3AF",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function ItemRegister() {
  return (
    <div className="sectiontitle" style={containerStyle}>
      <p className="pagetitle">상품 등록하기</p>
      <button style={buttonStyle}>등록</button>
    </div>
  );
}

export default ItemRegister;
