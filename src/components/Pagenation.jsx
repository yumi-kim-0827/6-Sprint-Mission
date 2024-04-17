import ICON_ARROW from "../assets/icon_arrow_left.svg";
import "../styles/Pagenation.css";

const PageButton = ({ page, currentPage, handlePage }) => {
  return (
    <div
      onClick={handlePage}
      className={["PageButton", currentPage === page ? "isActive" : ""].join(
        " "
      )}
    >
      {page}
    </div>
  );
};

const Pagenation = ({
  totalPages,
  currentPage,
  handlePageBtn,
  handlePagePrevBtn,
  handlePageNextBtn,
}) => {
  const createPagenation = (totalPages) => {
    const pagenationArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagenationArray.push(
        <PageButton
          key={`pageButton-${i}`}
          page={i}
          currentPage={currentPage}
          handlePage={() => {
            handlePageBtn(i);
          }}
        />
      );
    }
    return pagenationArray;
  };

  return (
    <div className="Pagenation">
      <div className="Pagenation__prev_button" onClick={handlePagePrevBtn}>
        <img src={ICON_ARROW} alt="페이지네이션 뒤로가기 버튼" />
      </div>
      <div className="Pagenation__lists">
        {createPagenation(totalPages).map((item) => item)}
      </div>
      <div className="Pagenation__next_button" onClick={handlePageNextBtn}>
        <img src={ICON_ARROW} alt="페이지네이션 뒤로가기 버튼" />
      </div>
    </div>
  );
};

export default Pagenation;
