import { useState } from "react";
import "./AddProduct.css";
import Nav from "../../components/Nav";
import FileInput from "../../components/FileInput";

const AddProduct = () => {
  const [addList, setAddList] = useState({
    productImg: null,
    productName: "",
    productIntro: "",
    productPrice: 0,
    productTag: "",
  });

  const inputChange = (name, value) => {
    console.log(name, value);
    setAddList({
      ...addList,
      [name]: value,
    });
  };

  const inputvalue = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  return (
    <>
      <Nav />
      <main>
        <form>
          <div className="Add_registration">
            <h1>상품 등록하기</h1>
            <button>등록</button>
          </div>

          <div className="input_container">
            <FileInput
              name="productImg"
              value={addList.productImg}
              inputChange={inputChange}
            />
          </div>

          <div className="input_container">
            <label htmlFor="product_name">상품명</label>
            <input
              id="product_name"
              name="productName"
              placeholder="상품명을 입력해주세요"
              type="text"
              className="inputTag"
              value={addList.productName}
              onChange={inputvalue}
            />
          </div>
          <div className="input_container">
            <label htmlFor="product_intro">상품 소개</label>
            <textarea
              id="product_intro"
              name="productIntro"
              placeholder="상품 소개를 입력해주세요"
              className="inputTextarea"
              value={addList.productIntro}
              onChange={inputvalue}
            />
          </div>
          <div className="input_container">
            <label htmlFor="product_price">판매가격</label>
            <input
              id="product_price"
              name="productPrice"
              placeholder="판매 가격을 입력해주세요"
              type="number"
              className="inputTag"
              value={addList.productPrice}
              onChange={inputvalue}
            />
          </div>
          <div className="input_container">
            <label htmlFor="product_tag">태그</label>
            <input
              id="product_tag"
              name="productTag"
              placeholder="태그를 입력해주세요"
              type="text"
              className="inputTag"
              value={addList.productTag}
              onChange={inputvalue}
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default AddProduct;
