import React from "react";

import "./ProductPagination.css";

import leftArrow from "../../../assets/images/items/arrow_left.svg";
import rightArrow from "../../../assets/images/items/arrow_right.svg";

interface ProductPaginationProps {
  totalPage: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  totalPage,
  activePage,
  onPageChange,
}) => {
  const maxVisiblePages = 5;

  let startPage: number;

  if (totalPage <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePage - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPage - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePage === 1}
        onClick={() => onPageChange(activePage - 1)}
      >
        <img src={leftArrow} alt="왼쪽으로" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${activePage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="paginationButton"
        disabled={activePage === totalPage}
        onClick={() => onPageChange(activePage + 1)}
      >
        <img src={rightArrow} alt="오른쪽으로" />
      </button>
    </div>
  );
};

export default ProductPagination;
