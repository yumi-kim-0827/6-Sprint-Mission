import { useState } from "react";
import dropDown from "../../assets/icon-dropdown.svg";
import searchIcon from "../../assets/icon-search.svg";
import { Link } from "react-router-dom";
import "./NavOnSaleProducts.css";
import useItemCount from "../../hooks/useItemCount";
import iconArrow from "../../assets/icon-arrow.svg";

export default function NavOnSaleProducts() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const isTb = useItemCount() === 2;

  const handleDropDownClick = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const [sortOrder, setSortOrder] = useState("최신순");
  const handleSortOrderClick = e => {
    setSortOrder(e.target.textContent);
  };
  return (
    <>
      <div className="nav-onSaleProducts">
        <p className="title-onSaleProducts">판매 중인 상품</p>
        <input
          className="input-onSaleProducts"
          placeholder={`검색할 상품을 입력해주세요`}
        />
        <img className="searchIcon" src={searchIcon} alt="검색 아이콘" />
        <Link to="/additem" className="btn btn-addProduct">
          상품 등록하기
        </Link>
        <div
          className="dropDownBtn-onSaleProducts"
          onClick={handleDropDownClick}
        >
          {isTb ? (
            <div className="">
              <span>{sortOrder}</span>
              <img src={iconArrow} alt="화살표 아이콘" />
            </div>
          ) : (
            <img
              src={dropDown}
              alt="드롭다운 버튼"
              onClick={handleDropDownClick}
            />
          )}
          {toggleDropDown && (
            <ul className="dropDownMenu-onSaleProducts">
              <li className="li-first" onClick={handleSortOrderClick}>
                최신순
              </li>
              <li className="li-second" onClick={handleSortOrderClick}>
                좋아요순
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
