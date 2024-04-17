import { useState } from "react";
import styles from "./AddItem.module.css";
import skeleton from "../../assets/bg-img-skeleton.svg";

export default function AddItem() {
  const [preview, setPreview] = useState(skeleton);

  return (
    <div className={styles.container}>
      <div className={styles.containerSubmit}>
        <p className={styles.titleSubmit}>상품 등록하기</p>
        <button className={styles.btn}>등록</button>
      </div>
      <div>
        <p className={styles.titleImg}>상품 이미지</p>
        <div className={styles.containerImg}>
          <div className={styles.preview}>
            <img src={preview} alt="상품 미리보기 이미지" />
          </div>
          <div className={styles.preview} />
        </div>
      </div>
      <div>
        <p className={styles.titleForms}>상품명</p>
        <input type="text" placeholder="상품명을 입력해주세요" />
      </div>
      <div>
        <p className={styles.titleForms}>상품 소개</p>
        <input type="text" placeholder="상품 소개를 입력해주세요" />
      </div>
      <div>
        <p className={styles.titleForms}>판매 가격</p>
        <input placeholder="판매 가격을 입력해주세요" />
      </div>
      <div>
        <p className={styles.titleForms}>태그</p>
        <input placeholder="태그를 입력해주세요" />
      </div>
      <div className={styles.containerTags}>
        <div className={styles.tag}>
          <span>티셔츠</span>
          <button className={styles.btnClose} />
        </div>
        <div className={styles.tag}>
          <span>상의</span>
          <button className={styles.btnClose} />
        </div>
      </div>
    </div>
  );
}
