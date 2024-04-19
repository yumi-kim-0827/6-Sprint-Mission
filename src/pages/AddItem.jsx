import { useState, useEffect } from "react";
import Button from "../components/Button";
import ImgInput from "../components/Items/ImgInput";
import "../styles/additem/AddItem.css";

function sanitize(type, value) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

const AddItem = () => {
  const [values, setValues] = useState({
    imgFile: null,
    title: "",
    description: "",
    price: 0,
  });
  const [tags, setTags] = useState([]);

  const handleValueChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleValueChange(name, sanitize(type, value));
  };

  return (
    <div className="AddItem">
      <form
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.name !== "productTags") {
            e.preventDefault();
            return;
          }
          if (e.key === "Enter" && e.target.name === "productTags") {
            e.preventDefault();
            console.log("productTags Enter!");
            return;
          }
        }}
      >
        <div className="AddItem__Header">
          <h1>상품 등록하기</h1>
          <div className="AddItem__Header__button_wrapper">
            <Button text={"등록"} type={"submit"} />
          </div>
        </div>

        <div className={"form__input_wrapper"}>
          <h1 className="form__input_title">상품 이미지</h1>
          <ImgInput
            name={"imgFile"}
            value={values.imgFile}
            onChange={handleValueChange}
          />
        </div>
        <div className={"form__input_wrapper"}>
          <h1 className="form__input_title">상품명</h1>
          <input
            name="title"
            type="text"
            placeholder="상품명을 입력해주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={"form__input_wrapper"}>
          <h1 className="form__input_title">상품 소개</h1>
          <textarea
            name="description"
            placeholder="상품 소개를 입력해주세요"
            value={values.description}
            onChange={handleInputChange}
          />
        </div>
        <div className={"form__input_wrapper"}>
          <h1 className="form__input_title">판매가격</h1>
          <input
            name="price"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={"form__input_wrapper"}>
          <h1 className="form__input_title">태그</h1>
          <input
            name="productTags"
            type="text"
            placeholder="태그를 입력해주세요"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
