import React from "react";
import searchicon from "../assets/search-icon.png";
import "./ShowProducts.css";
import likeicon from "../assets/like-icon.png";

function Products({ item }) {
  const { name, price, favoriteCount, images } = item;
  const formatedPrice = price.toLocaleString();

  return (
    <div className="ProductItem">
      <img className="ProductItem-Img" src={images} alt={name} />
      <div className="ProductItem-Name">{name}</div>
      <div className="ProductItem-Price">{formatedPrice}원</div>
      <div className="ProductItem-Favorite">
        <img src={likeicon} alt="좋아요" />
        <p>{favoriteCount}</p>
      </div>
    </div>
  );
}

const ShowProducts = ({ onChange, products }) => {
  return (
    <>
      <div className="Search-Group">
        <h2>전체 상품</h2>
        <div>
          <label htmlFor="search"></label>
          <img id="search-icon" src={searchicon} alt="검색 아이콘" />
          <input id="search" type="text" placeholder="검색할 상품을 입력해주세요" />
          <button className="Product-Resister-Btn">상품 등록하기</button>
          <label htmlFor="select-category"></label>
          <select onChange={onChange} name="category" id="select-category">
            <option value="최신순">최신순</option>
            <option value="좋아요순">좋아요순</option>
          </select>
        </div>
      </div>
      <ul className="ProductsList">
        {products.map((item) => {
          return (
            <li key={item.id}>
              <Products item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShowProducts;
