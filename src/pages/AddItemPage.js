import { useEffect, useState } from "react";
import AddItemFileInput from "../components/AddItemFileInput";
import "../styles/AddItemPage.css";
import AddItemTagsInput from "../components/AddItemTagsInput";

const INITIAL_VALUES = {
  name: "",
  description: "",
  price: "",
  images: [],
  tags: [],
};

export default function AddItemPage() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const [isWriteAll, setIsWriteAll] = useState(true);

  const handleChange = (name, value) => {
    // 배열(tags) 인 경우 배열을 생성
    if (name === "tags") {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: [...prevValues[name], value],
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleClearClick = (index) => {
    setValues((prevValues) => ({
      ...prevValues,
      tags: prevValues.tags.filter((tag, i) => i !== index),
    }));
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("images", values.images);
    formData.append("tags", values.tags);
  };

  useEffect(() => {
    if (
      values.name &&
      values.description &&
      values.price &&
      values.tags.length !== 0
    ) {
      setIsWriteAll(false);
    } else {
      setIsWriteAll(true);
    }
  }, [values]);

  return (
    <main>
      <form className="add-form" onSubmit={handleSubmit}>
        <h1 className="add-page-heading">상품 등록하기</h1>
        <AddItemFileInput name="images" onChange={handleChange} />
        <section>
          <label htmlFor="name" className="form-label">
            상품명
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="상품명을 입력해주세요"
            className="form-input"
            onChange={handleInputChange}
          />
        </section>
        <section>
          <label htmlFor="description" className="form-label">
            상품 소개
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="상품 소개를 입력해주세요"
            className="form-textarea"
            onChange={handleInputChange}
          />
        </section>
        <section>
          <label htmlFor="price" className="form-label">
            판매가격
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="판매가격을 입력해주세요"
            className="form-input"
            onChange={handleInputChange}
          />
        </section>
        <AddItemTagsInput
          name="tags"
          onChange={handleChange}
          value={values.tags}
          onClearClick={handleClearClick}
        />
        <button
          type="submit"
          className={`add-button-disabled ${isWriteAll ? "" : "active"}`}
          disabled={isWriteAll}
        >
          등록
        </button>
      </form>
    </main>
  );
}
