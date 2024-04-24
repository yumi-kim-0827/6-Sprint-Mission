import { useEffect, useState } from "react";
import FileInput from "./component/FileInput";
import "./AddItemPage.css";

function AddItemPage() {
  const [disabled, setDisabled] = useState(true);
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    tag: "",
    imgFile: null,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    const {title, description, price } = values;
    if(title !== '' && description !== '' && price !== ''){
      setDisabled(false);
    } else{
      setDisabled(true);
    }
  }, [values]);

  return (
    <div className="add-item-form-section">
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="add-item-form-header">
          <h1>상품 등록하기</h1>
          <button
            type="submit"
            className="add-item-form-upload-button"
            disabled={disabled}
          >
            등록
          </button>
        </div>

        <label htmlFor="img">상품 이미지</label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />

        <label htmlFor="img">상품명</label>
        <input
          name="title"
          id="img"
          value={values.title}
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />

        <label htmlFor="img">상품 소개</label>
        <textarea
          name="description"
          id="img"
          value={values.description}
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
          className="item-description"
        />

        <label htmlFor="img">판매 가격</label>
        <input
          name="price"
          id="img"
          value={values.price}
          placeholder="판매 가격을 입력해주세요"
          onChange={handleInputChange}
        />

        <label htmlFor="img">태그</label>
        <input
          name="tag"
          id="img"
          value={values.tag}
          placeholder="태그를 입력해주세요"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default AddItemPage;
