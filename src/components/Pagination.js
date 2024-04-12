import pageBackIcon from "../assets/icon/ic_pagination_left_dark.svg";
import pageNextIcon from "../assets/icon/ic_pagination_right_dark.svg";

function Pagination({ totalPage, setCurrentPage }) {
  const maxPage = totalPage >= 5 ? 5 : totalPage;
  const pages = Array.from({ length: maxPage }, (_, index) => index + 1);

  const handlePageClick = (e) => {
    const nextPage = Number(e.target.innerText);
    setCurrentPage(nextPage);
  };
  const handleBackClick = (e) => {};
  const handleNextClick = (e) => {};

  return (
    <div>
      <ol>
        <li
          className="pagination-elem elem-first"
          key="back"
          onClick={handleBackClick}
        >
          <img src={pageBackIcon} alt="이전페이지" />
        </li>
        {pages.map((page) => (
          <li className="pagination-elem" key={page} onClick={handlePageClick}>
            {page}
          </li>
        ))}
        <li
          className="pagination-elem elem-last"
          key="next"
          onClick={handleNextClick}
        >
          <img src={pageNextIcon} alt="다음페이지" />
        </li>
      </ol>
    </div>
  );
}

export default Pagination;
