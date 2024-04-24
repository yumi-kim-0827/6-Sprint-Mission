import React from "react";
import searchicon from "../assets/search-icon.png";
import "./ShowProducts.css";
import likeicon from "../assets/like-icon.png";

import { Link } from "react-router-dom";

function Product({ name, price, favoriteCount, images }) {
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

const ShowProducts = ({ onChangeSelect, onChangeInput, products }) => {
  return (
    <>
      <div className="Search-Group">
        <h2>전체 상품</h2>
        <div>
          <label htmlFor="search"></label>
          <img id="search-icon" src={searchicon} alt="검색 아이콘" />
          <input onChange={onChangeInput} id="search" type="text" placeholder="검색할 상품을 입력해주세요" />
        </div>
        <Link className="link" to="/additems">
          <button className="Product-Resister-Btn">상품 등록하기</button>
        </Link>
        <label htmlFor="select-category"></label>
        <select onChange={onChangeSelect} name="category" id="select-category">
          <option value="최신순">최신순</option>
          <option value="좋아요순">좋아요순</option>
        </select>
      </div>
      <ul className="ProductsList">
        {products.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/Items/${item.id}`}>
                <Product {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShowProducts;
