import React, { useState } from "react";
import styles from "../styles/additem.module.css";
import FileInput from "../components/FileInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function AddItem({ initialValues = INITIAL_VALUES, initialPreview }) {
  const [values, setValues] = useState(initialValues);

  //  함수는 필드의 이름과 새 값이 전달될 때마다 호출
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    setValues(INITIAL_VALUES);
  };
  return (
    <div className={styles.container}>
      <div className={styles["add-item-nav"]}>
        <h3 className={styles["additem-title"]}>상품 등록하기</h3>
        <button id="btn_small">등록</button>
      </div>

      <form onSubmit={handleSubmit}>
        <h4>상품 이미지</h4>
        <FileInput
          className="fileinput"
          name="imgFile"
          value={values.imgFile}
          initialPreview={initialPreview}
          onChange={handleChange}
        />
        <h4>상품명</h4>
        <input type="text" placeholder="상품명을 입력해주세요" />
        <h4>상품 소개</h4>
        <textarea type="text" placeholder="상품 소개를 입력해주세요" />

        <h4>판매가격</h4>
        <input type="number" placeholder="판매 가격을 입력해주세요" />

        <h4>태그</h4>
        <input type="text" placeholder="태그를 입력해주세요" />
      </form>
    </div>
  );
}

export default AddItem;
