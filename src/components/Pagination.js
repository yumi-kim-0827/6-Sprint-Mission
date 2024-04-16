function Pagination({ currentPage, totalPage, onPageChange }) {
  if (totalPage === 1) {
    return null;
  }

  const pageList = [];

  for (let i = 1; i <= totalPage; i++) {
    pageList.push(i);
  }

  const handleNextPage = () => {
    onPageChange((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    onPageChange((prevPage) => prevPage - 1);
  };
  const handleChangePage = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        onClick={handleNextPage}
        disabled={currentPage === 1}
      >{`<`}</button>
      {pageList.map((page) => (
        <button
          key={page}
          onClick={() => handleChangePage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handlePrevPage}
        disabled={currentPage === pageList.length}
      >{`>`}</button>
    </div>
  );
}

export default Pagination;
