import React from "react";
import InputWrapper from "../InputWrapper/InputWrapper";
import "./AddItem.css";

const inputs = [
  {
    type: "file",
    label: "상품 이미지",
    name: "File",
  },
  {
    label: "상품명",
    name: "title",
    placeholder: "상품명을 입력해주세요",
  },
  {
    type: "textarea",
    label: "상품 소개",
    name: "introduce",
    placeholder: "상품 소개를 입력해주세요",
  },
  {
    label: "판매가격",
    name: "price",
    placeholder: "판매 가격을 입력해주세요",
  },
  {
    label: "태그",
    name: "tag",
    placeholder: "태그를 입력해주세요",
  },
];

const handleSubmit = (e) => {
  e.preventDefault();
};

const AddItem = () => {
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
          <InputWrapper inputs={inputs} />
        </div>
      </form>
    </section>
  );
};

export default AddItem;
