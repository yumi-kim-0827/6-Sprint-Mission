import { useState, useEffect } from 'react';

function usePagination(initialPage = 1, totalCount, pageSize, asyncFunction) {
  const [page, setPage] = useState(initialPage);
  const totalPage = Math.ceil(totalCount / pageSize);
  const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1);

  const handleNextPage = async (...args) => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
      return await asyncFunction(...args);
    }
  };

  const handlePrevPage = async (...args) => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      return await asyncFunction(...args);
    }
  };

  const handleClickPageNum = async (number) => {
    if (number !== page) {
      setPage(number);
      return await asyncFunction(number);
    }
  };

  return {
    page,
    setPage,
    totalPage,
    pageNumbers,
    handleNextPage,
    handlePrevPage,
    handleClickPageNum,
  };
}

export default usePagination;
