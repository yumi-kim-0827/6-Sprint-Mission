import React, { useState } from "react";
import json from "./addItemInputs.json";
import InputWrapper from "../InputWrapper/InputWrapper";
import "./AddItem.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

const AddItem = () => {
  const [values, setValues] = useState({
    file: null,
    title: "",
    introduce: "",
    price: "",
    tag: [],
  });

  const handleDisabled = () => {
    const { title, introduce, price, tag } = values;
    const disabled =
      title !== "" &&
      introduce !== "" &&
      price !== "" &&
      !isNaN(Number(price)) &&
      tag.length > 0;

    return !disabled;
  };

  const handleChange = (value, name) => {
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
          <button disabled={handleDisabled()} type="submit">
            등록
          </button>
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
