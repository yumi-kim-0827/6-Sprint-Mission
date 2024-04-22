import React from "react";
import { range } from "lodash-es";
import "../styles/PaginationButton.css";
import ActiveRightArrow from "../assets/active-rightarrow.svg";
import ActiveLeftArrow from "../assets/active-leftarrow.svg";

const PaginationButton = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5;

  let startPage;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  }
  if (totalPageNum > maxVisiblePages) {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  //페이지 버튼 배열 생성
  const pages = range(
    startPage,
    Math.min(startPage + maxVisiblePages, totalPageNum + 1)
  );

  return (
    <div className="pagination-button-container">
      <button
        className={`pagination-button-item ${
          activePageNum === 1 ? "inactive" : ""
        }`}
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <img src={ActiveLeftArrow} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button-item ${
            activePageNum === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`pagination-button-item ${
          activePageNum === totalPageNum ? "inactive" : ""
        }`}
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <img src={ActiveRightArrow} />
      </button>
    </div>
  );
};

export default PaginationButton;
