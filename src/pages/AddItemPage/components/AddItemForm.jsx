import { useState } from "react";
import { useForm } from "react-hook-form";
import FileInput from "./FileInput";

const INITIAL_VALUES = {
  name: "",
  description: "",
  price: null,
  tags: [],
  images: null,
};

function sanitize(type, value) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

function AddItemForm() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleValueChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleValueChange(name, sanitize(type, value));
  };

  const handleFormSubmit = (e) => {
    // API 연동은 7주차에 추가할 예정
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("tags", values.tags);
    formData.append("images", values.images);
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleFormSubmit}>
        <div className="add-item-header">
          <h1>상품 등록하기</h1>
          <button type="submit" className="btn-submit" style={activeFormButton}>
            등록
          </button>
        </div>

        <div className="add-item-img">
          <h2>상품 이미지</h2>
          <FileInput
            name="images"
            value={values.images}
            onChange={handleValueChange}
          />
        </div>
        <div className="add-item-name">
          <h2>상품명</h2>
          <input
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className="add-item-description">
          <h2>상품 소개</h2>
          <textarea
            name="description"
            value={values.description}
            onChange={handleInputChange}
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className="add-item-price">
          <h2>판매 가격</h2>
          <input
            type="number"
            min="0"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className="add-item-tag">
          <h2>태그</h2>
          <input
            name="tags"
            value={values.tags}
            onChange={handleInputChange}
            placeholder="태그를 입력해주세요"
          />
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
