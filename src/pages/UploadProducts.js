import React, { useState } from "react";
import Header from "../components/Header";
import FileInput from "../components/FileInput";
import styles from "./UploadProducts.module.css";

const UploadProducts = () => {
  const [values, setValues] = useState({
    name: "",
    introduction: "",
    price: "",
    tag: "",
  });
  const { name, introduction, price, tag } = values;

  const handleButtonSubmit =
    (name && introduction && price && tag) === "" ? true : false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChangeValues(name, value);
  };

  const onChangeValues = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.UploadProducts}>
      <Header handleButtonSubmit={handleButtonSubmit} />
      <form>
        <FileInput />
        <div className={styles.form}>
          <label className={styles.label}>
            상품명
            <input
              name="name"
              value={values.name}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="상품명을 입력해주세요"
            />
          </label>

          <label className={styles.label}>
            상품 소개
            <textarea
              name="introduction"
              value={values.introduction}
              onChange={handleInputChange}
              className={styles.product_introduction_textarea}
              placeholder="상품 소개를 입력해주세요"
            />
          </label>

          <label className={styles.label}>
            판매가격
            <input
              name="price"
              value={values.price}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="판매가격을 입력해주세요"
            />
          </label>

          <label className={styles.label}>
            태그
            <input
              name="tag"
              value={values.tag}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="태그를 입력해주세요"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UploadProducts;
