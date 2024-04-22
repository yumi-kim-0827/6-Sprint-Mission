import React, { useState } from "react";
import styles from "../styles/pagination.module.css";

function Pagination({ productsPerPage, totalProducts, paginate }) {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // 전체 상품 수를 페이지 당 상품 수로 나누어 총 페이지 수 계산
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
      setIsButtonDisabled(false);
    } else if (currentPage === 1) {
      setIsButtonDisabled(true);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleNumClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };


  return (
    <div>
      <nav>
        <div className={styles.pagination}>
          <div
            className={
              currentPage === 1 ? styles["disabled"] : styles["page-link"]
            }
            onClick={handlePrev}
          >
            {"<"}
          </div>
          {pageNumbers.map((number) => (
            <div key={number}>
              <div
                onClick={() => handleNumClick(number)}
                className={
                  number === currentPage
                    ? styles["page-link-active"]
                    : styles["page-link"]
                }
              >
                {number}
              </div>
            </div>
          ))}
          <div
            className={
              currentPage === pageNumbers.length ? styles["disabled"] : styles["page-link"]
            }
            onClick={handleNext}
          >
            {">"}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Pagination;
