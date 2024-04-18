/* eslint-disable jsx-a11y/alt-text */
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
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");

  // input 값 받아오기
  const handleTagInput = (e) => {
    setInputTag(e.target.value);
  };

  const inputKeyDown = (e) => {
    if (e.key === "Enter" && inputTag) {
      if (!tags.includes(inputTag)) {
        //동일한 이름 태그 중복 안 되게
        setTags([...tags, inputTag]);
      }
      setInputTag("");
      e.preventDefault(); // 엔터 눌렀을 때 폼 제출하지 않도록 막기
    }
  };

  const removeTag = (removeTagIndex) => {
    const newTags = tags.filter((tag, index) => index !== removeTagIndex);
    setTags(newTags);
  };

  // input 입력할 때마다 새로운 값 반영하기
  const handleChange = (e) => {
    // input의 name, value 추출
    const { name, value } = e.target;
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
        <input
          type="text"
          value={inputTag}
          onChange={handleTagInput}
          onKeyDown={inputKeyDown}
          placeholder="태그를 입력해주세요 (엔터를 누르면 태그가 적용돼요)"
        />
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              {tag}
              <img
                src="/assets/icon_tag_remove.png"
                onClick={() => removeTag(index)}
                className={styles["tag-remove"]}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default AddItem;
