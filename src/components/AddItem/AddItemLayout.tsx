import "../../assets/styles/Root.css";
import "./AddItemLayout.css";

import React, { useState, ChangeEvent, FormEvent } from "react";
import FileInput from "./FileInput";
import AddTag from "./AddTag";

interface Values {
  imgFile: File | null;
  title: string;
  description: string;
  price: string | number;
  tag: string[];
}

const AddItemLayout: React.FC = () => {
  // 상품 정보
  const [values, setValues] = useState<Values>({
    imgFile: null,
    title: "",
    description: "",
    price: "",
    tag: [],
  });

  const handleChange = (name: string, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // 판매 가격의 3자리 숫자마다 콤마 추가
  const addComma = (price: string | number) => {
    if (isNaN(Number(price))) price = 0;
    let returnString = Number(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return returnString;
  };

  // 콤마 제거하고 배열에 추가
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value.replaceAll(",", ""));
    const { name } = e.target;
    handleChange(name, price);
  };

  // 상품명, 상품 설명, 상품 가격, 상품 태그에 값이 있는지 확인
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
            onChange={handleChange}
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
