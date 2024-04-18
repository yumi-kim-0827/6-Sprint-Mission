import React, { useState, useRef, useEffect } from "react";
import "./AddItems.css";
import fileplus from "../assets/file-plus.png";
import tagdelete from "../assets/tag-delete.png";

function ProductImg() {
  return (
    <div className="product-img container">
      <h3>상품 이미지</h3>
      <div className="product-img">
        <input type="file" name="productImg" id="product-img-input" />
        <label htmlFor="product-img-input">
          <img src={fileplus} alt="파일 이미지 선택" />
          <p>이미지 등록</p>
        </label>
      </div>
    </div>
  );
}

function ProductTag() {
  return (
    <div className="product-tag container">
      <h3>태그</h3>
      <label htmlFor="product-tag"></label>
      <input type="text" name="productTag" id="product-tag" placeholder="태그를 입력해주세요" />
      <div className="show-tag"></div>
    </div>
  );
}

const AddItems = () => {
  const [productValues, setProductValues] = useState({
    productName: "",
    productIntro: "",
    productPrice: 0,
    productImg: null,
    productTag: "",
  });
  const buttonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="product-form-top">
        <h2>상품 등록하기</h2>
        <button id="register-btn" ref={buttonRef} type="submit">
          등록
        </button>
      </div>
      <ProductImg name="productImg" value={productValues.productImg} />
      <div className="product-name container">
        <h3>상품명</h3>
        <label htmlFor="product-name"></label>
        <input
          name="productName"
          type="text"
          id="product-name"
          placeholder="상품명을 입력해주세요"
          value={productValues.productName}
        />
      </div>
      <div className="product-intro container">
        <h3>상품 소개</h3>
        <label htmlFor="product-intro"></label>
        <textarea
          name="productIntro"
          id="product-intro"
          placeholder="상품 소개를 입력해주세요"
          value={productValues.productIntro}
        ></textarea>
      </div>
      <div className="product-price container">
        <h3>판매가격</h3>
        <label htmlFor="product-price"></label>
        <input
          name="productPrice"
          type="number"
          id="product-price"
          placeholder="판매 가격을 입력해주세요"
          value={productValues.productPrice}
        />
      </div>
      <ProductTag name="productTag" value={productValues.productIag} />
    </form>
  );
};

export default AddItems;
