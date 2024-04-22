import React from 'react'
import leftArrow from '../assets/arrow_left.svg';
import rightArrow from '../assets/arrow_right.svg';
import styles from '../styles/Pagination.module.css';

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
    <>
      <button className={styles.pagination_commonButton_box} disabled={activePageNum === 1} onClick={() => onPageChange(activePageNum - 1)}>
        <img className={styles.pagination_commonButton_img} src={leftArrow} alt="이전 페이지로 이동" />
      </button>
      {pages.map((page) => (
        <button className={styles.pagination_commonButton_box} key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button className={styles.pagination_commonButton_box} disabled={activePageNum === totalPageNum} onClick={() => onPageChange(activePageNum + 1)}>
        <img className={styles.pagination_commonButton_img} src={rightArrow} alt="다음 페이지로 이동" />
      </button>
    </>
  )
}

export default Pagination