import { useState } from "react";
import FileInput from "../component/Product/FileInput";
import "../css/Product.css";

/*
1. 상단 네비 중고마켓 색상 변경
2. 이미지 제외한 인풋에 모든 값은 입력하면 등록 버튼 활성화
3. 태그 추가하기
4. 등록된 태그 삭제하기
*/

function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
    itemName: "",
    intro: "",
    price: "",
    tag: "",
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div id="AddItem">
      <div className="container">
        <form className="AddItemForm" onSubmit={handleSubmit}>
          <div className="addItem_header">
            <h2>상품 등록하기</h2>
            <button type="submit" id="addItem_btn">
              등록
            </button>
          </div>
          <h3>상품 이미지</h3>
          <FileInput
            name="imgFile"
            value={values.imgFile}
            onChange={handleChange}
          />
          <h3>상품명</h3>
          <input
            type="text"
            value={values.itemName}
            name="itemName"
            id="itemName"
            onChange={handleInputChange}
            placeholder="상품명을 입력해주세요"
          />
          <h3>상품 소개</h3>
          <textarea
            value={values.intro}
            name="intro"
            id="Intro"
            onChange={handleInputChange}
            placeholder="상품 소개를 입력해주세요"
          ></textarea>
          <h3>판매 가격</h3>
          <input
            type="text"
            value={values.price}
            name="price"
            id="Price"
            onChange={handleInputChange}
            placeholder="판매 가격을 입력해주세요"
          />
          <h3>태그</h3>
          <input
            type="text"
            value={values.tag}
            name="tag"
            id="Tag"
            onChange={handleInputChange}
            placeholder="태그를 입력해주세요"
          />
        </form>
      </div>
    </div>
  );
}
export default AddItem;
