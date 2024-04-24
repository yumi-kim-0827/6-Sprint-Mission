// AddItem.js
import React, { useState } from "react";
import ImageInput from "../../components/UI/ImageInput";
import deleteTagIcon from "../../assets/tag_x.svg";
import "./AddItem.css";

function AddItem() {
  const [values, setValues] = useState({
    productName: "",
    description: "",
    price: "",
    currentTag: "",
  });

  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const isButtonActive =
    values.productName && values.description && values.price && tags.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    setImage(file);
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  const handleAddTag = () => {
    if (values.currentTag.trim() !== "" && !tags.includes(values.currentTag)) {
      setTags((prev) => [...prev, values.currentTag.trim()]);
      setValues((prevValues) => ({
        ...prevValues,
        currentTag: "",
      }));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div>
      <form className="addItemForm">
        <div className="formTitle">
          <h1>상품 등록하기</h1>
          <button
            className={`addItemButton ${
              isButtonActive ? "activeAddButton" : ""
            }`}
            disabled={!isButtonActive}
            type="submit"
          >
            등록
          </button>
        </div>

        <ImageInput
          className="imageInput"
          onImageChange={handleImageChange}
          onImageDelete={handleImageDelete}
          image={image}
        />
        <div className="formInput">
          <label>상품명</label>
          <input
            className="formInputItem"
            name="productName"
            value={values.productName}
            placeholder="상품명을 입력해주세요"
            onChange={handleChange}
          />
          <label>상품 소개</label>
          <textarea
            className="productDescription"
            name="description"
            value={values.description}
            placeholder="상품 소개를 입력해주세요"
            onChange={handleChange}
          />
          <label>판매가격</label>
          <input
            className="formInputItem"
            name="price"
            value={values.price}
            placeholder="판매 가격을 입력해주세요"
            onChange={handleChange}
          />
          <label>태그</label>
          <input
            className="formInputItem"
            name="currentTag"
            value={values.currentTag}
            placeholder="태그를 입력해주세요"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />

          <div className="tags">
            {tags.map((tag, id) => (
              <span key={id} className="tag">
                {tag}
                <button
                  className="deleteTagButton"
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                >
                  <img
                    className="deleteTagIcon"
                    src={deleteTagIcon}
                    alt="태그 삭제"
                  />
                </button>
              </span>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
