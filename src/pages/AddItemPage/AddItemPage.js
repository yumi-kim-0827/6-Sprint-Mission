import { useState } from "react";
import FileInput from "../AddItemPage/component/FileInput";
import "./AddItemPage.css";

function AddItemPage() {
  const [inputValue, setInputValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsButtonActive(e.target.value !== "");
  };

  

  return (
    <form className="addItemSection">
      <div className="add-section">
        <h1>상품 등록하기</h1>
        <button className="item-add-button">등록</button>
      </div>

      <div>
        <h2>상품 이미지</h2>
        <FileInput />
      </div>
      <div>
        <h2>상품명</h2>
        <input placeholder="상품명을 입력해주세요" />
      </div>
      <div>
        <h2>상품소개</h2>
        <input
          placeholder="상품 소개를 입력해주세요"
          className="input-description"
        />
      </div>
      <div>
        <h2>판매가격</h2>
        <input placeholder="판매 가격을 입력해주세요" />
      </div>
      <div>
        <h2>태그</h2>
        <input placeholder="태그를 입력해주세요" className="tag-input" />
      </div>

      <div></div>
    </form>
  );
}

export default AddItemPage;
