import React, { useState } from "react";
import json from "./addItemInputs.json";
import InputWrapper from "../InputWrapper/InputWrapper";
import "./AddItem.css";

console.log(json);

const handleSubmit = (e) => {
  e.preventDefault();
};

const AddItem = () => {
  const [values, setValues] = useState({
    file: null,
    title: "",
    introduce: "",
    price: 0,
    tag: [],
  });

  console.log(values, "avv");

  const handleChange = (value, name) => {
    console.log(value, name);
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <section className="container add-item-page">
      <form className="add-item-form" onSubmit={handleSubmit}>
        {/* 타이틀 */}
        <div className="title-header">
          <h3 className="title">상품 등록하기</h3>
          <button type="submit">등록</button>
        </div>

        {/* 입력 폼 */}
        <div className="input-form">
          <InputWrapper inputs={json} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default AddItem;
