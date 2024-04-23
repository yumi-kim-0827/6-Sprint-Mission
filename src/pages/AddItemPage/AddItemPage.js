import { useState } from "react";
import FileInput from "./component/FileInput";
import "./AddItemPage.css";

function AddItemPage() {

  return (
    <div className="add-item-section">
      <div className="add-item-section-header">
        <h1>상품 등록하기</h1>
        <button type="submit" className="add-item-button">등록</button>
      </div>

      <form className="add-item-form">
        
        <FileInput/>
        <label htmlFor="img">상품명</label>
        <input id="img" placeholder="상품명을 입력해주세요" />

        <label htmlFor="img">상품 소개</label>
        <textarea id="img" placeholder="상품 소개를 입력해주세요" className="item-description" />

        <label htmlFor="img">판매 가격</label>
        <input id="img" placeholder="판매 가격을 입력해주세요" />

        <label htmlFor="img">태그</label>
        <input id="img" placeholder="태그를 입력해주세요" />
      </form>
    </div>

  );
}

export default AddItemPage;
