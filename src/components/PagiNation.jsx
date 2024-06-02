import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPage, page, setPage }) => {
  const handlePageClick = (e) => {
    console.log(e.target.value);
    setPage(e.target.value);
  };

  return (
    <div className={styles.Pagination}>
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          className={styles.button}
          value={index + 1}
          onClick={handlePageClick}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
