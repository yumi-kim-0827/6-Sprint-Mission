import { useState, useEffect } from 'react';

function usePagination(initialPage = 1, totalCount, pageSize, asyncFunction) {
  const [page, setPage] = useState(initialPage);
  const totalPage = Math.ceil(totalCount / pageSize);
  const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1);

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleClickPageNum = (number) => {
    if (number !== page) {
      setPage(number);
    }
  };

  useEffect(() => {
    asyncFunction(page);
  }, [page]);

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
