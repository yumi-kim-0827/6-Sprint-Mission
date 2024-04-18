import React, { useState } from "react";
import styles from "../styles/additem.module.css";
import FileInput from "../components/FileInput";

const INITIAL_VALUES = {
  title: "",
  content: "",
  price: 0,
  imgFile: null,
};

function AddItem({ initialValues = INITIAL_VALUES, initialPreview }) {
  const [values, setValues] = useState(initialValues);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // input 입력할 때마다 새로운 값 반영하기
  const handleChange = (e) => {
    // input의 name, value 추출
    const {name, value} = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value, // 변경된 필드의 값만 새로운 값으로 업데이트
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("price", values.price);
    formData.append("imgFile", values.imgFile);

    setValues(INITIAL_VALUES);
  };
  return (
    <div className={styles.container}>
      <div className={styles["add-item-nav"]}>
        <h3 className={styles["additem-title"]}>상품 등록하기</h3>
        <button
          className={
            !values.title || !values.content || !values.price
              ? styles["button-disabled"]
              : styles["button-abled"]
          }
          disabled={!values.title || !values.content || !values.price}
          onClick={handleSubmit}
        >
          등록
        </button>
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
        <input
          type="text"
          name="title"
          value={values.title}
          placeholder="상품명을 입력해주세요"
          onChange={handleChange}
        />
        <h4>상품 소개</h4>
        <textarea
          type="text"
          name="content"
          value={values.content}
          placeholder="상품 소개를 입력해주세요"
          onChange={handleChange}
        />

        <h4>판매가격</h4>
        <input
          type="number"
          name="price"
          value={values.price}
          placeholder="판매 가격을 입력해주세요"
          onChange={handleChange}
        />

        <h4>태그</h4>
        <input type="text" placeholder="태그를 입력해주세요" />
      </form>
    </div>
  );
}

export default AddItem;
