import React, { useState, useMemo, useRef, useEffect } from "react";
import "./PageButton.css";

const PageButton = ({ handlePageNum, handlePage }) => {
  const [buttonNum, setButtonNum] = useState(1);
  const pageNum = handlePageNum();
  const pageDownRef = useRef();
  const pageUpRef = useRef();

  const pageArr = useMemo(() => {
    return Array.from({ length: pageNum }, (_, i) => i + 1);
  }, [pageNum]);

  const getButtonValue = (num) => {
    setButtonNum(num); // 클릭된 버튼의 값을 상태로 설정
    handlePage(num);
  };

  const pageDown = () => {
    if (buttonNum > 1) {
      setButtonNum(Number(buttonNum) - 1);
      handlePage(Number(buttonNum) - 1);
    }
  };
  const pageUp = () => {
    if (buttonNum < pageArr.length) {
      setButtonNum(Number(buttonNum) + 1);
      handlePage(Number(buttonNum) + 1);
    }
  };

  useEffect(() => {
    const pageUpNode = pageUpRef.current;
    const pageDownNode = pageDownRef.current;
    if (buttonNum > 1 && pageDownNode) {
      pageDownNode.disabled = false;
    } else {
      pageDownNode.disabled = true;
    }
    if (buttonNum >= pageArr.length && pageArr.length !== 0 && pageUpNode) {
      pageUpNode.disabled = true;
    } else {
      pageUpNode.disabled = false;
    }
  }, [buttonNum]);

  return (
    <div className="button">
      <button ref={pageDownRef} className="page-side-btn" onClick={pageDown}>
        &lt;
      </button>
      {pageArr.map((num) => {
        return (
          <button
            className={buttonNum === num ? "page-btn-active" : "page-btn"}
            key={num}
            onClick={() => getButtonValue(num)}
            value={num}
          >
            {num}
          </button>
        );
      })}
      <button ref={pageUpRef} className="page-side-btn" onClick={pageUp}>
        &gt;
      </button>
    </div>
  );
};

export default PageButton;
