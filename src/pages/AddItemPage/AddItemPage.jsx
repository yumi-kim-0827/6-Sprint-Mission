import React, { useEffect, useState } from "react";
import FileInput from "./FileInput";
import "./AddItemPage.css";

function AddItemPage() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    price: "",
    tag: "",
    imgFile: null,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      values.title !== "" &&
      values.content !== "" &&
      values.price !== "" &&
      values.tag !== "" &&
      values.imgFile !== null;

    setIsFormValid(isValid);
  }, [values]);

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
    alert("submit!");
  };

  return (
    <form className="AddItemForm" onSubmit={handleSubmit}>
      <div className="AddItemHeader">
        <h1>상품 등록하기</h1>
        <button
          type="submit"
          style={{ backgroundColor: isFormValid ? "#3692FF" : "" }}
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>
      <div className="AddItemWrapper">
        <h2>상품 이미지</h2>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </div>
      <div className="AddItemWrapper">
        <h2>상품명</h2>
        <input
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="AddItemWrapper">
        <h2>상품 소개</h2>
        <textarea
          name="content"
          value={values.content}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div className="AddItemWrapper">
        <h2>판매가격</h2>
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div className="AddItemWrapper">
        <h2>태그</h2>
        <input
          name="tag"
          value={values.tag}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        />
      </div>
    </form>
  );
}

export default AddItemPage;
