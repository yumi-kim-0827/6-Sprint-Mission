import { useState } from "react";
import { Link } from "react-router-dom";
import "./OnSaleProducts.css";
import dropDown from "../assets/icon-dropdown.svg";
import searchIcon from "../assets/icon-search.svg";

export default function OnSaleProducts() {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleClick = () => {
    setToggleDropDown(!toggleDropDown);
  };
  return (
    <>
      <div className="container-onSaleProducts">
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
          <div className="dropDownBtn-onSaleProducts">
            <img src={dropDown} alt="드롭다운 버튼" onClick={handleClick} />
            {toggleDropDown && (
              <ul className="dropDownMenu-onSaleProducts">
                <li className="li-first">최신순</li>
                <li className="li-second">좋아요순</li>
              </ul>
            )}
          </div>
        </div>
        <div>아이템 영역</div>
        <div>판매 중인 상품 영역</div>
      </div>
    </>
  );
}
