// AddItem.js
import React, { useState } from "react";
import ImageInput from "./ImageInput";
import "./AddItem.css";

function AddItem() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState(null);

  const isButtonActive = productName && description && price && tag;

  const valueChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleImageChange = (file) => {
    setImage(file);
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <form className="addItemForm">
      <div className="formTitle">
        <h1>상품 등록하기</h1>
        <button disabled={!isButtonActive}>등록</button>
      </div>

      <ImageInput
        onImageChange={handleImageChange}
        onImageDelete={handleImageDelete}
        image={image}
      />
      <div className="formInput">
        <label>상품명</label>
        <input
          placeholder="상품명을 입력해주세요"
          onChange={valueChange(setProductName)}
        />
        <label>상품 소개</label>
        <textarea
          placeholder="상품 소개를 입력해주세요"
          onChange={valueChange(setDescription)}
        />
        <label>판매가격</label>
        <input
          placeholder="판매 가격을 입력해주세요"
          onChange={valueChange(setPrice)}
        />
        <label>태그</label>
        <input
          placeholder="태그를 입력해주세요"
          onChange={valueChange(setTag)}
        />
      </div>
    </form>
  );
}

export default AddItem;
