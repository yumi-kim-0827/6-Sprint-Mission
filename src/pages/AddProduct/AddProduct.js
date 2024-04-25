import { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [addList, setAddList] = useState({
    productImg: "",
    productName: "",
    productIntro: "",
    productPrice: 0,
    productTag: "",
  });

  return (
    <main>
      <form>
        <div className="Add_registration">
          <h1>상품 등록하기</h1>
          <button>등록</button>
        </div>

        <div className="input_container">
          <label htmlFor="">상품 이미지</label>
          <input id="product_" type="file" />
        </div>
        <div className="input_container">
          <label id="product_name" htmlFor="">
            상품명
          </label>
          <input
            placeholder="상품명을 입력해주세요"
            type="text"
            className="inputTag"
          />
        </div>
        <div className="input_container">
          <label id="product_intro" htmlFor="">
            상품 소개
          </label>
          <textarea
            placeholder="상품 소개를 입력해주세요"
            className="inputTextarea"
          />
        </div>
        <div className="input_container">
          <label id="product_price" htmlFor="">
            판매가격
          </label>
          <input
            placeholder="판매 가격을 입력해주세요"
            type="number"
            className="inputTag"
          />
        </div>
        <div className="input_container">
          <label id="product_tag" htmlFor="">
            태그
          </label>
          <input
            placeholder="태그를 입력해주세요"
            type="text"
            className="inputTag"
          />
        </div>
      </form>
    </main>
  );
};

export default AddProduct;
