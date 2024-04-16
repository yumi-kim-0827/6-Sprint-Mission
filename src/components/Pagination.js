import "../styles/Pagination.css";
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
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`page-btn next-prev-btn ${
          currentPage === 1 ? " disabled-prev" : " active-prev"
        }`}
      ></button>
      {pageList.map((page) => (
        <button
          key={page}
          onClick={() => handleChangePage(page)}
          className={`page-btn ${currentPage === page ? " active" : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === pageList.length}
        className={`page-btn next-prev-btn ${
          currentPage === pageList.length ? " disabled-next" : " active-next"
        }`}
      ></button>
    </div>
  );
}

export default Pagination;
