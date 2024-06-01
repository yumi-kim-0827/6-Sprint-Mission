import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import FileInput from "./FileInput";

type InputValue = string | number | File | null;
interface FormValues {
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: File | null;
}
const INITIAL_VALUES: FormValues = {
  name: "",
  description: "",
  price: 0,
  tags: [],
  images: null,
};

function sanitize(type: string, value: InputValue) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

function AddItemForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);

  const handleValueChange = (name: string, value: InputValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    handleValueChange(name, sanitize(type, value));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleFormSubmit}>
        <div className="add-item-header">
          <h1>상품 등록하기</h1>
          <button type="submit" className="btn-submit">
            등록
          </button>
        </div>

        <div className="add-item-img">
          <h2>상품 이미지</h2>
          <FileInput
            name="images"
            value={values.images}
            onImageChange={handleValueChange}
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
