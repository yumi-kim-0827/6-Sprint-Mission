import React, { useState } from "react";
import useAsync from "../hooks/useAsync";
import FileInput from "../components/FileInput";
import styles from "../styles/AddItem.module.css";

const INITIAL_VALUES = {
  title: "",
  price: "",
  content: "",
  tags: [],
  imgFile: null,
};

function Tags({ onChange }) {
  const [tags, setTags] = useState([]);
  const removeTags = (targetIndex) => {
    // 태그를 삭제하는 메소드
    const filteredTags = tags.filter((el, index) => index !== targetIndex);
    onChange("tags", filteredTags);
    setTags((prevTags) => [...prevTags, ...filteredTags]);
  };

  const addTags = (e) => {
    // tags 배열에 새로운 태그를 추가하는 메소드
    const inputVal = e.target.value;
    // 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    // 태그가 추가되면 input 창 비우기
    if (e.key === "Enter" && inputVal !== "" && !tags.includes(inputVal)) {
      setTags((prevTags) => [...prevTags, inputVal]);
      onChange("tags", tags);
      e.target.value = "";
    }
  };

  return (
    <>
      <input
        name="tags"
        type="text"
        onKeyUp={(e) => {
          addTags(e);
        }}
        placeholder="태그를 입력해주세요"
        className={`${styles.itemInputs} ${styles.itemTags}`}
      />
      <ul className={styles.tags}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tagTitle}>{tag}</span>
            <span
              className={styles.tagCloseIcon}
              onClick={() => removeTags(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function AddItem({ initialValues = INITIAL_VALUES, initialPreview, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [validate, setValidate] = useState(false);
  const [loading, error, onSubmitAsync] = useAsync(onSubmit);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function checkValidate() {
    console.log("validate");
    if (
      values["title"] &&
      values["price"] &&
      values["content"] &&
      values["imgFile"]
    ) {
      setValidate(true);
    } else {
      setValidate(false);
      return;
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("content", values.content);
    formData.append("tags", values.tags);
    formData.append("imgFile", values.imgFile);

    const result = await onSubmitAsync(formData);
    if (!result) return;
    // onSubmitSuccess(review);
    setValues(INITIAL_VALUES);
  };

  return (
    <>
      <div className={styles.addItemContainer}>
        <form onSubmit={handleSubmit} className={styles.addItemForm}>
          <div className={styles.addItemHeader}>
            <h1 className={styles.addItemTitle}>상품 등록하기</h1>
            <button
              type="submit"
              disabled={loading}
              className={
                validate
                  ? `${styles.addItemSubmitButton} ${styles.active}`
                  : styles.addItemSubmitButton
              }
            >
              등록
            </button>
          </div>
          <label className={styles.addItemFormLabel}>상품 이미지</label>
          <FileInput
            name="imgFile"
            value={values.imgFile}
            initialPreview={initialPreview}
            onChange={handleChange}
            validateCheck={checkValidate}
          />
          <label className={styles.addItemFormLabel}>상품명</label>
          <input
            name="title"
            value={values.title}
            onChange={handleInputChange}
            placeholder="상품명을 입력해주세요"
            className={`${styles.itemInputs} ${styles.itemTitle}`}
            onBlur={checkValidate}
          />
          <label className={styles.addItemFormLabel}>상품 소개</label>
          <textarea
            name="content"
            value={values.content}
            onChange={handleInputChange}
            placeholder="상품 소개를 입력해주세요"
            className={`${styles.itemInputs} ${styles.itemContent}`}
            onBlur={checkValidate}
          />
          <label className={styles.addItemFormLabel}>판매 가격</label>
          <input
            type="number"
            name="price"
            value={values.price}
            pattern="[0-9]+([,][0-9]{1,2})?"
            onChange={handleInputChange}
            placeholder="판매 가격을 입력해주세요"
            className={`${styles.itemInputs} ${styles.itemPrice}`}
            onBlur={checkValidate}
          />
          <label className={styles.addItemFormLabel}>태그</label>
          <Tags name="tags" values={values} onChange={handleChange} />
          {error?.messages && <div>{error.messages}</div>}
        </form>
      </div>
    </>
  );
}

export default AddItem;
