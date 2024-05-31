import React from "react";
import Header from "../components/Header";
import FileInput from "../components/FileInput";
import styles from "./UploadProducts.module.css";

const UploadProducts = () => {
  return (
    <div className={styles.UploadProducts}>
      <Header />
      <form>
        <FileInput />
        <div className={styles.form}>
          <label className={styles.label}>
            상품명
            <input
              className={styles.input}
              placeholder="상품명을 입력해주세요"
            />
          </label>

          <label className={styles.label}>
            상품 소개
            <textarea
              className={styles.product_introduction_textarea}
              placeholder="상품 소개를 입력해주세요"
            />
          </label>

          <label className={styles.label}>
            판매가격
            <input
              className={styles.input}
              placeholder="판매가격을 입력해주세요"
            />
          </label>

          <label className={styles.label}>
            태그
            <input className={styles.input} placeholder="태그를 입력해주세요" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UploadProducts;
