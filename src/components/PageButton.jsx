import React, { useState, useMemo } from "react";
import "./PageButton.css";

const PageButton = ({ handlePageNum, handlePage }) => {
  const [buttonNum, setButtonNum] = useState(0);
  const pageNum = handlePageNum();

  const pageArr = useMemo(() => {
    return Array.from({ length: pageNum }, (_, i) => i + 1);
  }, [pageNum]);

  const getButtonValue = (e) => {
    const value = e.target.value;
    setButtonNum(value);
    handlePage(value);
  };
  const pageDown = () => {
    if (buttonNum > 1) {
      setButtonNum(buttonNum * 1 - 1);
      handlePage(buttonNum * 1 - 1);
    }
  };
  const pageUp = () => {
    if (buttonNum < pageArr.length) {
      setButtonNum(buttonNum * 1 + 1);
      handlePage(buttonNum * 1 + 1);
    }
  };
  return (
    <div className="button">
      <button onClick={pageDown}>&lt;</button>
      {pageArr.map((num, idx) => {
        return (
          <button key={idx} onClick={getButtonValue} value={num}>
            {num}
          </button>
        );
      })}
      <button onClick={pageUp}>&gt;</button>
    </div>
  );
};

export default PageButton;
