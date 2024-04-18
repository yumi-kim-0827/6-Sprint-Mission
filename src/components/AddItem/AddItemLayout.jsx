import "../../assets/styles/Root.css";
import "./AddItemLayout.css";

import { useState } from "react";
import FileInput from "./FileInput";
import AddTag from "./AddTag";

const AddItemLayout = () => {
  const [values, setValues] = useState({
    imgFile: null,
    title: "",
    description: "",
    price: "",
    tag: [],
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

  const isDone = !!(values.title && values.description && values.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("등록: ", values);
  };

  return (
    <>
      <main className="add_main_container">
        <form className="add_form" onSubmit={handleSubmit}>
          <div className="add_top">
            <span className="add_top_title">상품 등록하기</span>
            <button type="submit" className="add_top_btn" disabled={!isDone}>
              등록
            </button>
          </div>

          <div className="add_image">
            <span className="add_image_title">상품 이미지</span>
            <FileInput
              name="imgFile"
              value={values.imgFile}
              onChange={handleChange}
            />
          </div>

          <div className="add_name">
            <span className="add_name_title">상품명</span>
            <input
              className="add_name_input"
              type="text"
              placeholder="상품명을 입력해주세요"
              name="title"
              value={values.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="add_description">
            <span className="add_description_title">상품 소개</span>
            <textarea
              className="add_description_input"
              placeholder="상품 소개를 입력해주세요"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="add_price">
            <span className="add_price_title">판매 가격</span>
            <input
              className="add_price_input"
              type="text"
              placeholder="판매 가격을 입력해주세요"
              name="price"
              value={values.price}
              onChange={handleInputChange}
            />
          </div>

          <AddTag
            tags={values.tag}
            setTags={(tags) => handleChange("tag", tags)}
          />
        </form>
      </main>
    </>
  );
};

export default AddItemLayout;
