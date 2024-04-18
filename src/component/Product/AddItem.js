import { useState } from "react";

function AddItem() {
  const [values, setValues] = useState({
    title: "",
    price: "",
    intro: "",
    tag: "",
    file: "",
    itemName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div id="AddItem">
      <div className="container">
        <form className="AddItemForm">
          <div className="addItem_header">
            <h2>상품 등록하기</h2>
            <button type="button" id="addItem_btn">
              등록
            </button>
          </div>
          <h3>상품 이미지</h3>
          <input
            type="file"
            value={values.file}
            name="file"
            id="file"
            onChange={handleChange}
          />
          <h3>상품명</h3>
          <input
            type="text"
            value={values.title}
            name="itemName"
            id="itemName"
            onChange={handleChange}
          />
          <h3>상품 소개</h3>
          <textarea
            value={values.intro}
            name="intro"
            id="Intro"
            onChange={handleChange}
          ></textarea>
          <h3>판매 가격</h3>
          <input
            type="text"
            value={values.price}
            name="price"
            id="Price"
            onChange={handleChange}
          />
          <h3>태그</h3>
        </form>
      </div>
    </div>
  );
}
export default AddItem;
