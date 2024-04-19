import { useState } from "react";
import FileInput from "../component/Product/FileInput";
import "../css/Product.css";
import Tags from "../component/Product/Tags";

function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
    itemName: "",
    intro: "",
    price: "",
    tag: null,
  });

  //File Input의 value를 가져오기 위해 기존 handleInputChange 함수와 분리
  const handleChange = (name, value) => {
    //setState함수를 사용해서 값을 변경
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const abledButton = () => {
    //등록 버튼 활성화
    if (values.itemName && values.intro && values.price && values.tag) {
      return true;
    } else {
      return false;
    }
  };

  //input의 value값을 가져오는 함수
  const handleInputChange = (e) => {
    //해당 인풋의 name값과 value값을 가져옴
    const { name, value } = e.target;
    handleChange(name, value);
  };

  //등록 버튼을 눌렀을때
  const handleSubmit = (e) => {
    //버튼의 기본 동작을 실행하지 않도록 지정
    e.preventDefault();
    console.log(values);
  };
  console.log(values.itemName);
  return (
    <div id="AddItem">
      <div className="container">
        <form className="AddItemForm" onSubmit={handleSubmit}>
          <div className="addItem_header">
            <h2>상품 등록하기</h2>
            <button type="submit" disabled={!abledButton()} id="addItem_btn">
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
          <Tags name="tag" value={values.tag} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}
export default AddItem;
