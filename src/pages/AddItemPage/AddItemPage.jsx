import React, { useEffect, useState } from "react";
import FileInput from "./FileInput";
import "./AddItemPage.css";

function AddItemPage() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    price: 0,
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
        <label>상품 등록하기</label>
        <button
          type="submit"
          style={{ backgroundColor: isFormValid ? "#3692FF" : "" }}
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>
      <div className="AddItemWrapper">
        <label>상품 이미지</label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </div>
      <div className="AddItemWrapper">
        <label>상품명</label>
        <input
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="AddItemWrapper">
        <label>상품 소개</label>
        <textarea
          name="content"
          value={values.content}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div className="AddItemWrapper">
        <label>판매가격</label>
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div className="AddItemWrapper">
        <label>태그</label>
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
