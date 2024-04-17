import { useEffect, useState } from "react";
import AddItemFileInput from "../components/AddItemFileInput";
import "../styles/AddItemPage.css";

export default function AddItemPage() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [isWriteAll, setIsWriteAll] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (values.name && values.description && values.price) {
      setIsWriteAll(false);
    } else {
      setIsWriteAll(true);
    }
  }, [values]);

  return (
    <main>
      <form className="add-form">
        <h1 className="add-page-heading">상품 등록하기</h1>
        <AddItemFileInput />
        <div>
          <label htmlFor="name" className="form-label">
            상품명
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="상품명을 입력해주세요"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            상품 소개
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="상품 소개를 입력해주세요"
            className="form-textarea"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price" className="form-label">
            판매가격
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="판매가격을 입력해주세요"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onSubmit={handleSubmit}
          className={`add-button-disabled ${isWriteAll ? "" : "active"}`}
          disabled={isWriteAll}
        >
          등록
        </button>
      </form>
    </main>
  );
}
