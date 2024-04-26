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
    const filteredTags = tags.filter((el, index) => index !== targetIndex);
    onChange("tags", filteredTags);
    setTags(filteredTags);
  };

  const addTags = (e) => {
    const inputVal = e.target.value;

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

function AddItemPage({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onSubmit,
}) {
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

  function handleInputChange({ target }) {
    const { name, value } = target;
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

export default AddItemPage;
