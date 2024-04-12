import ICON_ARROW from "../assets/icon_arrow_left.svg";
import "../styles/Pagenation.css";

const PageButton = ({ page }) => {
  return <div className="PageButton">{page}</div>;
};

const Pagenation = ({
  totalPostCount,
  page,
  handlePrevPage,
  handleNextPage,
}) => {
  const caluclateTotalPages = (totalPostCount, pageSize) => {
    return Math.ceil(totalPostCount / pageSize);
  };
  const renderPageButtons = (totalPages, currentPage, handlePageChange) => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      <PageButton
        key={i}
        page={i}
        isActive={i === currentPage}
        handlePageChange={handlePageChange}
      />;
    }
  };

  return (
    <div className="Pagenation">
      <div className="Pagenation__prev_button">
        <img src={ICON_ARROW} alt="페이지네이션 뒤로가기 버튼" />
      </div>
      <div className="Pagenation__lists">
        <PageButton page={1} />
        <PageButton page={2} />
      </div>
      <div className="Pagenation__next_button">
        <img src={ICON_ARROW} alt="페이지네이션 뒤로가기 버튼" />
      </div>
    </div>
  );
};

export default Pagenation;
