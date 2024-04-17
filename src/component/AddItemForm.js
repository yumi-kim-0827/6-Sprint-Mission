import React from "react";
import plusIcon from "../image/ic_plus.png"

const ProductImageInput = () => {
  return (
    <div className="image-input additem-input">
      <label>상품 이미지</label>
      <div className="image-input-content">
        <label htmlFor="productImage">
          <div class="btn-upload">
            <img src={plusIcon}/>
            <span>이미지 등록</span>
          </div>
        </label>
        <input id="productImage" type="file" accept="image/png, image/jpeg" />
        <div className="image-preview">
          <img src alt="이미지 미리보기" />
          <img src alt="이미지 삭제" />
        </div>
      </div>
    </div>
  );
};
const TagInput = () => {
  return (
    <div className="one-line-input additem-input">
      <label htmlFor="ProductTag">태그</label>
      <input id="ProductTag" name="tags" placeholder="태그를 입력해주세요" />
    </div>
  );
};

const AddItemForm = () => {
  return (
    <form onSubmit className="additem-form">
      <ProductImageInput />
      <div className="one-line-input additem-input">
        <label htmlFor="ProductName">상품명</label>
        <input
          id="ProductName"
          name="name"
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="textArea-input additem-input">
        <label htmlFor="ProductDescription">상품 소개</label>
        <textarea
          id="ProductDescription"
          name="description"
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div className="one-line-input additem-input">
        <label htmlFor="ProductPrice">판매 가격</label>
        <input
          id="ProductPrice"
          name="price"
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <TagInput />
    </form>
  );
};

export default AddItemForm;
