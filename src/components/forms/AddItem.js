import Button from "components/commons/Button";
import { ImageBlock, ImageInput } from "components/commons/ImageBlock";
import styles from "styles/forms.module.scss";
import TShirt from "assets/img/t-shirt.jpg";
import {
  FormInput,
  FormTextarea,
  NumberInput,
} from "components/commons/Inputs";
import { useState } from "react";
import { removeCommas } from "utils/commas";
import Tag from "components/commons/Tag";

export default function AddItemForm() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [currentTag, setCurrentTag] = useState("");
  const [content, setTextContent] = useState("");

  // TODO: 요구조건 다 채울 시 submitBtn 색 변경
  return (
    <div className={styles.add__item}>
      <div className={styles.header}>
        <h1>상품 등록하기</h1>
        <Button className={styles.submitBtn}>등록</Button>
      </div>

      <form className={styles.add__item__form}>
        <div className={styles.form__image}>
          <h1>상품 이미지</h1>
          <div className={styles.image__container}>
            <ImageInput />
            <ImageBlock url={TShirt} />
          </div>
        </div>

        <div className={styles.form__title}>
          <h1>상품명</h1>
          <FormInput
            placeholder="상품명을 입력해주세요"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>

        <div className={styles.form__description}>
          <h1>상품 소개</h1>
          <FormTextarea
            placeholder="상품 소개를 입력해주세요"
            content={content}
            onChange={(e) => {
              setTextContent(e.target.value);
            }}
          />
        </div>

        <div className={styles.form__price}>
          <h1>판매 가격</h1>
          <NumberInput
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={(e) => {
              setPrice(Number(removeCommas(e.target.value)));
            }}
          />
        </div>

        <div className={styles.form__tags}>
          <h1>태그</h1>
          <FormInput
            placeholder="태그를 입력해주세요"
            value={currentTag}
            onChange={(e) => {
              setCurrentTag(e.target.value);
            }}
          />
          <div className={styles.tag__list}>
            <Tag>티셔츠</Tag>
            <Tag>상의</Tag>
          </div>
        </div>
      </form>
    </div>
  );
}
