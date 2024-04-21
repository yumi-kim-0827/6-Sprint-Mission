import pageBackIcon from "../../assets/icon/ic_pagination_left_dark.svg";
import pageNextIcon from "../../assets/icon/ic_pagination_right_dark.svg";
import "./Pagination.css";

function Pagination({ pageInfo: { totalPage, currentPage }, setPageInfo }) {
  const maxPage = totalPage >= 5 ? 5 : totalPage;
  const pages = Array.from({ length: maxPage }, (_, index) => index + 1);

  const handlePageClick = ({ target: { innerText } }) => {
    const nextPage = Number(innerText);
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: nextPage,
    }));
  };
  const handleBackClick = () => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: prevPageInfo.currentPage - 1,
    }));
  };
  const handleNextClick = () => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      currentPage: prevPageInfo.currentPage + 1,
    }));
  };

  const isActive = (page) => currentPage === page;

  return (
    <ol className="pagination">
      <li key="back">
        <button
          className="pagination-elem elem-first"
          onClick={handleBackClick}
          disabled={currentPage === 1}
        >
          <img src={pageBackIcon} alt="이전페이지" />
        </button>
      </li>
      {pages.map((page) => (
        <li key={page}>
          <button
            className={`pagination-elem ${isActive(page) ? "active" : ""}`}
            onClick={handlePageClick}
          >
            {page}
          </button>
        </li>
      ))}
      <li key="next">
        <button
          className="pagination-elem elem-last"
          onClick={handleNextClick}
          disabled={currentPage === totalPage}
        >
          <img src={pageNextIcon} alt="다음페이지" />
        </button>
      </li>
    </ol>
  );
}

export default Pagination;
