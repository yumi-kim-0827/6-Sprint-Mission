import React, { useState } from "react";
import ProductImageInput from "./ProductImageInput";
import ProductInfoInput from "./ProductInfoInput";
import deleteTagButton from "../image/ic_X_for_tag.png";
import "../css/additemForm.css";

const TagListElement = ({ tag, onDelete }) => {
  const handleDeleteTag = () => {
    onDelete(tag);
  };
  return (
    <div className="tag-element">
      <span>{tag}</span>
      <img
        src={deleteTagButton}
        onClick={handleDeleteTag}
        alt="태그 삭제 버튼"
      />
    </div>
  );
};

const AddItemForm = ({
  values,
  onChange,
  upLoadImg,
  cancelUPLoadImg,
  addTagList,
  deleteTagList,
}) => {
  const [tag, setTag] = useState("");

  //태그 onChange
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  // 태그 onSubmit
  const handleEnterOneTag = (e) => {
    e.preventDefault();
    addTagList(tag);
    setTag("");
  };
  // 태그 스페이스비 누르면 입력
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      addTagList(tag);
      setTag("");
    }
  };

  return (
    <div className="additem-form">
      <ProductImageInput
        name="images"
        value={values.images}
        onChange={upLoadImg}
        onDelete={cancelUPLoadImg}
      />
      <ProductInfoInput
        label="상품명"
        id="ProductName"
        name="name"
        placeholder="상품명을 입력해주세요"
        value={values.name}
        onChange={onChange}
      />
      <ProductInfoInput
        label="상품 소개"
        id="ProductDescription"
        name="description"
        placeholder="상품 소개를 입력해주세요"
        value={values.description}
        onChange={onChange}
        type="textarea"
      />
      <ProductInfoInput
        label="판매 가격"
        id="ProductPrice"
        name="price"
        placeholder="판매 가격을 입력해주세요"
        value={values.price}
        onChange={onChange}
        type="number"
      />
      <ProductInfoInput
        label="태그"
        id="ProductTag"
        name="tags"
        placeholder="태그를 입력해주세요"
        value={tag}
        onChange={handleTagChange}
        onSubmit={handleEnterOneTag}
        onKeyDown={handleKeyDown}
      />
      <div className="tag-list-section">
        {values.tags.map((tag) => (
          <TagListElement key={tag} tag={tag} onDelete={deleteTagList} />
        ))}
      </div>
    </div>
  );
};

export default AddItemForm;
