import React from "react";
import PageButton from "../components/Pagenation.jsx";

export const calculateTotalPages = (totalPostCount, pageSize) => {
  return Math.ceil(totalPostCount / pageSize);
};

export const renderPageButtons = (
  totalPages,
  currentPage,
  handlePageChange
) => {
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <PageButton
        key={i}
        page={i}
        isActive={i === currentPage}
        handlePageChange={handlePageChange}
      />
    );
  }
  return pageButtons;
};
