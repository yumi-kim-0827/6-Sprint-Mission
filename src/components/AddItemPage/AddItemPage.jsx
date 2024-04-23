import React, { useEffect, useState } from "react";
import "./AddItemPage.css";
import FileInput from "./FileInput";

function AddItemPage() {
  const [itemInfo, setItemInfo] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemTags: "",
    itemImage: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  //잘 안되네요. ....... . . ... .....ㅠㅠ

  useEffect(() => {
    const { itemName, itemDescription, itemPrice, itemTags } = itemInfo;
    setIsFormValid(
      itemName.trim() !== "" &&
      itemDescription.trim() !== "" &&
      itemPrice.trim() !== "" &&
      itemTags.trim() !== ""
    );
  }, [itemInfo]);

  const handleChange = (name, value) => {
    setItemInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    updateFormValidity(name, value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const updateFormValidity = (name, value) => {
    const { itemName, itemDescription, itemPrice, itemTags } = itemInfo;
    const isValid =
      itemName.trim() !== "" &&
      itemDescription.trim() !== "" &&
      itemPrice.trim() !== "" &&
      itemTags.trim() !== "";

    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit 확인");
    console.log(itemInfo);
  };

  return (
    <div className="add-item-page">
      <form className="add-item-form" onSubmit={handleSubmit}>
        <div className="add-item-form-top">
          <h1>상품 등록하기</h1>
          <button
            className="add-item-button"
            type="submit"
            disabled={!isFormValid}
          >
            등록
          </button>
        </div>
        <label htmlFor="itemImage">상품 이미지</label>
        <FileInput
          name="itemImage"
          value={itemInfo.itemImage}
          onChange={handleChange}
        />
        <label htmlFor="itemName">상품명</label>
        <input
          className="item-info-input"
          type="text"
          name="itemName"
          value={itemInfo.itemName}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <label htmlFor="itemDescription">상품 소개</label>
        <textarea
          className="item-info-input large-input"
          name="itemDescription"
          value={itemInfo.itemDescription}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        ></textarea>
        <label htmlFor="itemPrice">판매가격</label>
        <input
          className="item-info-input"
          type="number"
          name="itemPrice"
          value={itemInfo.itemPrice}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
        <label htmlFor="itemTags">태그</label>
        <input
          className="item-info-input"
          type="text"
          name="itemTags"
          value={itemInfo.itemTags}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        />
      </form>
    </div>
  );
}

export default AddItemPage;
