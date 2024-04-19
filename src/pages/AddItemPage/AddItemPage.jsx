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
  });

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="enter-item-section" onSubmit={handleSubmit}>
      <div className="label-box">
        <div className="enter-label">상품등록하기</div>
        <button type="submit" className="enter-button" onClick={handleSubmit}>
          등록
        </button>
      </div>
      <div className="input-container">
        <div className="input-image-box">
          <div className="input-label">상품 이미지</div>
          <div className="input-file-box">
            <label htmlFor="input-file" className="input-file-label">
              <img className="image-plus" src={Plus} alt="이미지등록" />
              <p className="enter-image-text">이미지 등록</p>
            </label>
            <InputFile
              name="imageFile"
              value={values.imageFile}
              onChange={handleChange}
            />
          </div>
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
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="input-description" className="input-label">
            상품 소개
          </label>
          <textarea
            className="inputs input-textarea"
            type="text"
            id="input-description"
            value={values.itemDescription}
            name="itemDescription"
            onChange={handleInputChange}
            placeholder="상품 소개를 입력해주세요"
            required
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
            required
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
            name="itemTag"
            onChange={handleInputChange}
            placeholder="태그를 입력해주세요"
          />
        </div>
      </div>
    </form>
  );
}

export default AddItemPage;
