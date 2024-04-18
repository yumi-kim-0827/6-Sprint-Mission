import React from "react";
import { range } from "lodash-es";

const PaginationButton = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5;
  //왜 VisiblePag의 수를 정해놓을까 의문이 들었는데
  //데이터의 양이 아주 많을 때를 고려한 것이라는 생각이 들었습니다.
  //아직까지는 코드를 짤 때 이런 부분들이 잘 떠오르지 않네요.
  let startPage;
  //보여줄 페이지의 범위 설정
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
    <div>
      <button
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        ◀
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${
            activePageNum === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        ▶
      </button>
    </div>
  );
};

export default PaginationButton;
