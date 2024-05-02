import { useState } from "react";
import FileInput from "./FileInput";
import "./ProductRagistrationForm.css";

function ProductRagistrationForm() {
  const [values, setValues] = useState({
    imageFile: null,
    productName: "",
    productDescription: "",
    productPrice: "",
    productTag: "",
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="product-ragistration-form" onSubmit={handleSubmit}>
      <div className="product-ragistration-form-wrapper">
        <h1>상품등록하기</h1>
        <button className="product-ragistration-form__button" type="submit">
          등록
        </button>
      </div>
      <label htmlFor="product-image">상품 이미지</label>
      <FileInput
        name="imageFile"
        value={values.imageFile}
        onChange={handleChange}
      ></FileInput>
      <label htmlFor="product-name">상품명</label>
      <input
        name="productName"
        value={values.productName}
        onChange={handleInputChange}
        id="product-name"
        type="text"
        placeholder="상품명을 입력해주세요"
        required
      ></input>
      <label htmlFor="product-description">상품 소개</label>
      <textarea
        name="productDescription"
        value={values.productDescription}
        onChange={handleInputChange}
        id="product-description"
        placeholder="상품 소개를 입력해주세요"
        required
      ></textarea>
      <label htmlFor="product-price">판매가격</label>
      <input
        name="productPrice"
        value={values.productPrice}
        onChange={handleInputChange}
        id="product-price"
        type="number"
        placeholder="판매 가격을 입력해주세요"
        min="0"
        required
      ></input>
      <label htmlFor="product-tag">태그</label>
      <input
        name="productTag"
        value={values.productTag}
        onChange={handleInputChange}
        id="product-tag"
        type="text"
        placeholder="태그를 입력해주세요"
        required
      ></input>
    </form>
  );
}

export default ProductRagistrationForm;
