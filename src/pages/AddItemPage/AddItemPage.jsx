import React, { useState } from "react";
import "./AddItemPage.css";
import Plus from "../../assets/ic_plus.svg";
import InputFile from "../../components/InputFile";

function AddItemPage() {
  const [values, setValues] = useState({
    imageFile: null,
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemTags: [],
  });

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="enter-item-section" onSubmit={handleSubmit}>
      <div className="label-box">
        <div className="enter-label">상품등록하기</div>
        <button
          type="submit"
          className="enter-button"
          onClick={console.log("ta-da")}
        >
          등록
        </button>
      </div>
      <div className="input-container">
        <div className="input-box input-image-box">
          <label htmlFor="input-image" className="input-label">
            상품 이미지
          </label>
          <InputFile
            name="imageFile"
            value={values.imageFile}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="input-name" className="input-label">
            상품명
          </label>
          <input
            className="inputs input-text"
            id="input-name"
            type="text"
            value={values.itemName}
            name="itemName"
            onChange={handleInputChange}
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className="input-box">
          <label htmlFor="input-description" className="input-label">
            상품 소개
          </label>
          <input
            className="inputs input-textarea"
            id="input-description"
            type="text-area"
            value={values.itemDescription}
            name="itemScript"
            onChange={handleInputChange}
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className="input-box">
          <label htmlFor="input-price" className="input-label">
            판매 가격
          </label>
          <input
            className="inputs input-text"
            id="input-price"
            type="text"
            value={values.itemPrice}
            name="itemPrice"
            onChange={handleInputChange}
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className="input-box">
          <label htmlFor="input-tags" className="input-label">
            태그
          </label>
          <input
            className="inputs input-text"
            id="input-tags"
            type="text"
            value={values.itemTags}
            name="itemTags"
            onChange={handleInputChange}
            placeholder="태그를 입력해주세요"
          />
        </div>
      </div>
    </form>
  );
}

export default AddItemPage;
