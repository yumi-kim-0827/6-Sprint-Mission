import React, { useRef } from "react";
import "./PageButton.css";

const PageButton = ({ handlePageNum, handlePage }) => {
  let pageArr = [];
  for (let i = 1; i <= handlePageNum(); i++) {
    pageArr.push(i);
  }
  const getButtonValue = (e) => {
    const value = e.target.value;
    handlePage(value);
  };
  return (
    <div className="button">
      <button>&lt;</button>
      {pageArr.map((num, idx) => {
        return (
          <button key={idx} onClick={getButtonValue} value={num}>
            {num}
          </button>
        );
      })}
      <button>&gt;</button>
    </div>
  );
};

export default PageButton;
