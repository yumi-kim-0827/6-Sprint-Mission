import React, { useState } from "react";
import "./AddItem.css";

function AddItem() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const isButtonActive = productName && description && price && tag;

  return (
    <form className="addItemForm">
      <div className="formTitle">
        <h1>상품 등록하기</h1>
        <button disabled={!isButtonActive}>등록</button>
      </div>
      <div className="formInput">
        <label>상품 이미지</label>
        <input type="file"></input>
        <label>상품명</label>
        <input
          placeholder="상품명을 입력해주세요"
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>상품 소개</label>
        <textarea
          placeholder="상품 소개를 입력해주세요"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>판매가격</label>
        <input
          placeholder="판매 가격을 입력해주세요"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>태그</label>
        <input
          placeholder="태그를 입력해주세요"
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
    </form>
  );
}

export default AddItem;
