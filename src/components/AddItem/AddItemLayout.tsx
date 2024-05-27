import "../../assets/styles/Root.css";
import "./AddItemLayout.css";

import React, { useState, ChangeEvent, FormEvent } from "react";
import FileInput from "./FileInput";
import AddTag from "./AddTag";

interface Values {
  imgFile: File | null;
  title: string;
  description: string;
  price: number;
  tag: string[];
}

const AddItemLayout: React.FC = () => {
  const [values, setValues] = useState<Values>({
    imgFile: null,
    title: "",
    description: "",
    price: 0,
    tag: [],
  });

  const handleChange = (
    name: keyof Values,
    value: string | number | File | null | string[]
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name as keyof Values, value);
  };

  const handleFileChange = (name: string, value: File | null) => {
    handleChange(name as keyof Values, value);
  };

  const addComma = (price: number) => {
    if (isNaN(price)) price = 0;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value.replace(/,/g, ""));
    handleChange("price", price);
  };

  const isValidForm = !!(
    values.title &&
    values.description &&
    values.price &&
    values.tag.length
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("등록: ", values);
  };

  return (
    <main className="add_main_container">
      <form className="add_form" onSubmit={handleSubmit}>
        <div className="add_top">
          <span className="add_top_title">상품 등록하기</span>
          <button type="submit" className="add_top_btn" disabled={!isValidForm}>
            등록
          </button>
        </div>

        <div className="add_image">
          <FileInput
            name="imgFile"
            value={values.imgFile}
            onChange={handleFileChange}
          />
        </div>

        <div className="add_name">
          <label htmlFor="add_name_input_id" className="add_name_title">
            상품명
          </label>
          <input
            id="add_name_input_id"
            className="add_name_input"
            type="text"
            placeholder="상품명을 입력해주세요"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="add_description">
          <label
            htmlFor="add_description_input_id"
            className="add_description_title"
          >
            상품 소개
          </label>
          <textarea
            id="add_description_input_id"
            className="add_description_input"
            placeholder="상품 소개를 입력해주세요"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="add_price">
          <label htmlFor="add_price_input_id" className="add_price_title">
            판매 가격
          </label>
          <input
            id="add_price_input_id"
            className="add_price_input"
            type="text"
            placeholder="판매 가격을 입력해주세요"
            name="price"
            maxLength={15}
            value={addComma(values.price) || ""}
            onChange={priceChangeHandler}
          />
        </div>

        <AddTag
          tags={values.tag}
          setTags={(tags: string[]) => handleChange("tag", tags)}
        />
      </form>
    </main>
  );
};

export default AddItemLayout;
