import React, { useState } from "react";
import styles from "../styles/pagenation.module.css";

function Pagenation({ productsPerPage, totalProducts, paginate }) {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const handleNumClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <div>
      <nav>
        <div className={styles.pagenation}>
          <div className={styles["page-link"]} onClick={handlePrev}>
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
          <div className={styles["page-link"]} onClick={handleNext}>
            {">"}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Pagenation;
