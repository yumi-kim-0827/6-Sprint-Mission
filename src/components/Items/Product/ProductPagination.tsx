import React from "react";

import "./ProductPagination.css";

import { ReactComponent as LeftArrow } from "../../../assets/images/items/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/items/arrow_right.svg";

const ProductPagination = ({ totalPage, activePage, onPageChange }) => {
  const maxVisiblePages = 5;

  let startPage;

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
        <LeftArrow />
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
        <RightArrow />
      </button>
    </div>
  );
};

export default ProductPagination;
