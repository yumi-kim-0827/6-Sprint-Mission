import "./Pagination.css";
import React from "react";

const Pagination = ({ currentPage = 1, totalPages = 7, onPageChange }) => {
  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => goToPage(i + 1)}
        className={i + 1 === currentPage ? "active" : ""}
      >
        {i + 1}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        <i className="arrow-left"></i>
      </button>
      {renderPageButtons()}
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        <i className="arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
