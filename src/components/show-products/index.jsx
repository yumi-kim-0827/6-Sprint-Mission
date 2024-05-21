import React, { useState, useRef, useEffect } from "react";
import searchicon from "../../assets/search-icon.png";
import "./ShowProducts.css";
import likeicon from "../../assets/like-icon.png";
import dropdownArrow from "../../assets/dropdown-arrow.png";
import dropdownMobile from "../../assets/dropdown-mobile.png";

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

const SearchInput = ({ onChangeSelect, onChangeInput }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("최신순");
  const recentRef = useRef();
  const favoriteRef = useRef();

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChangeRecent = () => {
    const recentNode = recentRef.current;
    if (recentNode) {
      setDropdownMenu(recentNode.innerText);
      onChangeSelect(recentNode.innerText);
    }
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleChangeFavorite = () => {
    const favoiteNode = favoriteRef.current;
    if (favoiteNode) {
      setDropdownMenu(favoiteNode.innerText);
      onChangeSelect(favoiteNode.innerText);
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="Search-Group">
      <h2>전체 상품</h2>
      <div>
        <label htmlFor="search"></label>
        <img id="search-icon" src={searchicon} alt="검색 아이콘" />
        <input onChange={onChangeInput} id="search" type="text" placeholder="검색할 상품을 입력해주세요" />
      </div>
      <Link className="Product-Resister-Btn" to="/additems">
        상품 등록하기
      </Link>
      <div className="select-category">
        <div onClick={handleDropdown} className="dropdown-menu">
          <p>{dropdownMenu}</p>
          <img src={dropdownMobile} className="mobileIcon" alt="제품 페이지 드롭다운 메뉴 모바일 아이콘" />
          <img src={dropdownArrow} className="dropdownIcon" alt="제품 페이지 드롭다운 메뉴 아이콘" />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-option">
            <span ref={recentRef} onClick={handleChangeRecent}>
              최신순
            </span>
            <div className="line"></div>
            <span ref={favoriteRef} onClick={handleChangeFavorite}>
              좋아요순
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const ShowProducts = ({ onChangeSelect, onChangeInput, products }) => {
  return (
    <>
      <SearchInput onChangeSelect={onChangeSelect} onChangeInput={onChangeInput} />
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
