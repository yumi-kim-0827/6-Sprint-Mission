import "./Market.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import FileInput from "./components/FileInput";
import { useState } from "react";
import Tag from "./components/Tag";

const Market = () => {
  const [value, setValue] = useState({
    imgFile: null,
    title: "",
    content: "",
    price: "",
    tag: "",
  });
  const handleChange = (name, value) => {
    setValue((prevValues) => ({
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
    console.log(value);
  };
  const handleTagChange = (tag) => {
    handleChange("tag", tag);
  };

  return (
    <>
      <Nav />
      <form className="MarketRegistForm">
        <div id="registDiv">
          <h1 id="registText">상품 등록하기</h1>
          <button
            id="registButton"
            disabled={
              value.imgFile !== null &&
              value.title !== "" &&
              value.content !== "" &&
              value.price !== "" &&
              value.tag !== ""
                ? false
                : true
            }
          >
            등록
          </button>
        </div>
        <label>
          상품 이미지
          <FileInput
            name="imgFile"
            value={value.imgFile}
            onChange={handleChange}
          />
        </label>
        <label>
          상품명
          <input
            className="textInput"
            name="title"
            type="text"
            placeholder="상품명을 입력해주세요"
            value={value.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          상품 소개
          <input
            className="textInputLong"
            name="content"
            type="text"
            placeholder="상품 소개를 입력해주세요"
            value={value.content}
            onChange={handleInputChange}
          />
        </label>
        <label>
          판매가격
          <input
            className="textInput"
            name="price"
            type="text"
            placeholder="판매 가격을 입력해주세요"
            value={value.price}
            onChange={handleInputChange}
          />
        </label>
        <Tag onChange={handleTagChange} />
      </form>
    </>
  );
};

export default Market;
