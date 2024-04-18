import React, { useRef, useState, useEffect } from "react";
import plusIcon from "../image/ic_plus.png";
import deleteButton from "../image/ic_X.png";

const ProductImageInput = ({ value, onChange, onDelete }) => {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  
  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = null;
    onDelete();
  };

  return (
    <div className="image-input additem-input">
      <label>상품 이미지</label>
      <div className="image-input-content">
        <label htmlFor="productImage">
          <div className="btn-upload">
            <img src={plusIcon} />
            <span>이미지 등록</span>
          </div>
        </label>
        <input
          id="productImage"
          type="file"
          name="images"
          ref={inputRef}
          accept="image/png, image/jpeg"
          onChange={onChange}
        />
        {value && (
          <div className="image-preview-section">
            <img
              src={preview}
              alt="이미지 미리보기"
              className="image-preview"
            />
            <img
              src={deleteButton}
              alt="이미지 삭제"
              className="image-preview-delete-button"
              onClick={handleClearClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
const TagInput = ({ value, onChange }) => {
  return (
    <div className="one-line-input additem-input">
      <label htmlFor="ProductTag">태그</label>
      <input
        id="ProductTag"
        name="tags"
        placeholder="태그를 입력해주세요"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const AddItemForm = () => {
  //상품 정보 담은 객체
  const [values, setValues] = useState({
    images: null,
    name: "",
    description: "",
    price: "",
    tags: [],
  });

  //서밋 함수 미완성
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  //입력 했을 떄 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //사진 올릴때 함수
  const handleImageInputChange = (e) => {
    const { name, files } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: files[0],
    }));
  };
  //사진 삭제 시 함수
  const handleDeletePreviewImage = () => {
    setValues((prevValues) => ({
      ...prevValues,
      images: null,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="additem-form">
      <ProductImageInput
        name="images"
        value={values.images}
        onChange={handleImageInputChange}
        onDelete={handleDeletePreviewImage}
      />
      <div className="one-line-input additem-input">
        <label htmlFor="ProductName">상품명</label>
        <input
          id="ProductName"
          name="name"
          placeholder="상품명을 입력해주세요"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="textArea-input additem-input">
        <label htmlFor="ProductDescription">상품 소개</label>
        <textarea
          id="ProductDescription"
          name="description"
          placeholder="상품 소개를 입력해주세요"
          value={values.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="one-line-input additem-input">
        <label htmlFor="ProductPrice">판매 가격</label>
        <input
          id="ProductPrice"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          value={values.price}
          onChange={handleInputChange}
        />
      </div>
      <TagInput value={values.tags} onChange={handleInputChange} />
    </form>
  );
};

export default AddItemForm;
