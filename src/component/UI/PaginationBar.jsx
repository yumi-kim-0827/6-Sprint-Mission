import React from "react";
import "./Pagination.css";
import { ReactComponent as LeftArrow } from "../../assets/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow_right.svg";

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5; // 최대 표시할 페이지 수
  let startPage;

  // 표시할 시작 페이지 계산
  if (totalPageNum <= maxVisiblePages) {
    startPage = 1; // 총 페이지 수가 최대 표시할 페이지 수보다 작거나 같으면 시작 페이지는 1
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  // 페이지 배열 생성
  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    // 보여줄 최대 페이지 수와 남은 페이지 수 중 작은 값을 기준으로 페이지 배열 생성
    (_, i) => startPage + i
    // 시작 페이지부터 시작하여 페이지 수 만큼 페이지 배열 생성
  );

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePageNum === 1} // 첫 페이지일 때 버튼 비활성화
        onClick={() => onPageChange(activePageNum - 1)} // 이전 페이지로 이동
      >
        ㅇ
        <LeftArrow />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${
            activePageNum === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)} // 현재 페이지 표시. active 추가해서 css 다르게 표시했음
        >
          {page}
        </button>
      ))}

      <button
        className="paginationButton"
        disabled={activePageNum === totalPageNum} // 마지막 페이지일 때 버튼 비활성화
        onClick={() => onPageChange(activePageNum + 1)} // 다음 페이지로 이동
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
