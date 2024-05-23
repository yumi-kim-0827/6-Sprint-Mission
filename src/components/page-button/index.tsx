import React, { useState, useMemo, useRef, useEffect } from "react";
import "./PageButton.css";

interface Props {
  handlePageNum: (value?: number) => void;
  handlePage: (value: number) => void;
  page: number;
}

const PageButton = ({ handlePageNum, handlePage, page }: Props) => {
  const [isPageDownBtnDisabled, setIsPageDownBtnDisabled] = useState(true);
  const [isPageUpBtnDisabled, setIsPageUpBtnDisabled] = useState(false);
  const pageNum = handlePageNum();

  const pageArr: number[] = useMemo(() => {
    return [...Array(pageNum).keys()].map((i) => i + 1);
  }, [pageNum]);

  const getButtonValue = (value: number) => {
    handlePage(value);
  };

  const pageDown = () => {
    if (page > 1) {
      handlePage(page - 1);
    }
  };
  const pageUp = () => {
    if (page < pageArr.length) {
      handlePage(page + 1);
    }
  };

  useEffect(() => {
    if (page > 1) {
      setIsPageDownBtnDisabled(false);
    } else {
      setIsPageDownBtnDisabled(true);
    }
    if (page >= pageArr.length && pageArr.length !== 0) {
      setIsPageUpBtnDisabled(true);
    } else {
      setIsPageUpBtnDisabled(false);
    }
  }, [page]);

  return (
    <div className="button">
      <button disabled={isPageDownBtnDisabled} className="page-side-btn" onClick={pageDown}>
        &lt;
      </button>
      {pageArr.map((num) => {
        return (
          <button
            className={page === num ? "page-btn-active" : "page-btn"}
            key={num}
            onClick={() => getButtonValue(num)}
            value={num}
          >
            {num}
          </button>
        );
      })}
      <button disabled={isPageUpBtnDisabled} className="page-side-btn" onClick={pageUp}>
        &gt;
      </button>
    </div>
  );
};

export default PageButton;
