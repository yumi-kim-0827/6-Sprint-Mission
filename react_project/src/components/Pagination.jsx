import React from 'react'
import leftArrow from '../assets/arrow_left.svg';
import rightArrow from '../assets/arrow_right.svg';

function Pagination({ totalPageNum, activePageNum, onPageChange }) {
  const maxVisiblePages = 5;
  let startPage;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1) || 
    Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1)},
    (_, i) => startPage + i
  );

  return (
    <div>
      <button disabled={activePageNum === 1} onClick={() => onPageChange(activePageNum - 1)}>
      <img src={leftArrow} alt="이전 페이지로 이동" />
      </button>
      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button disabled={activePageNum === totalPageNum} onClick={() => onPageChange(activePageNum + 1)}>
        <img src={rightArrow} alt="다음 페이지로 이동" />
      </button>
    </div>
  )
}

export default Pagination