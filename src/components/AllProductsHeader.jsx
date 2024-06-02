import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import styles from "./AllProductsHeader.module.css";
import searchIcon from "../image/search_Icon.svg";

const AllProductsHeader = ({ onChange, setOrder }) => {
  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <div className={styles.AllProductsHeader}>
      <div className={styles.all_item}>전체 상품</div>
      <div className={styles.editor}>
        <img src={searchIcon} />
        <input
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleInputChange}
        />
        <Link to="/additem" className={styles.button}>
          상품 등록하기
        </Link>
        <Dropdown setOrder={setOrder} />
      </div>
    </div>
  );
};

export default AllProductsHeader;
