// AddItem.js
import React, { useState } from "react";
import ImageInput from "./ImageInput";
import "./AddItem.css";

function AddItem() {
  const [values, setValues] = useState({
    productName: "",
    description: "",
    price: 0,
    tag: "",
  });

  const [image, setImage] = useState(null);

  const isButtonActive =
    values.productName && values.description && values.price && values.tag;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
          name="productName"
          value={values.productName}
          placeholder="상품명을 입력해주세요"
          onChange={handleChange}
        />
        <label>상품 소개</label>
        <textarea
          name="description"
          value={values.description}
          placeholder="상품 소개를 입력해주세요"
          onChange={handleChange}
        />
        <label>판매가격</label>
        <input
          name="price"
          value={values.price}
          placeholder="판매 가격을 입력해주세요"
          onChange={handleChange}
        />
        <label>태그</label>
        <input
          name="tag"
          value={values.tag}
          placeholder="태그를 입력해주세요"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default AddItem;
