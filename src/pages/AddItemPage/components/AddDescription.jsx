import React, { useState } from "react";
import "../AddItemPage.css";

function AddDescription() {
  return (
    <>
      <p className="sectiontitle">상품명</p>
      <input
        type="text"
        className="inputStyle"
        placeholder="상품명을 입력해주세요"
      />
      <p className="sectiontitle">상품소개</p>
      <input
        type="text"
        className="inputStyle"
        style={{ height: "200px" }}
        placeholder="상품 소개를 입력해주세요"
      />
      <p className="sectiontitle">판매가격</p>
      <input
        type="text"
        className="inputStyle"
        placeholder="판매 가격을 입력해주세요"
      />
    </>
  );
}

export default AddDescription;
