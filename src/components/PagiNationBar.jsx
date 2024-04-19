import ArrowLeft from "../assets/arrow_left_active.svg";
import ArrowRight from "../assets/arrow_right_active.svg";

function PagiNationBar({ handlePageNum }) {
  return (
    <div className="pagiNation-box">
      <button>
        <img src={ArrowLeft} alt="왼쪽페이지이동" />
      </button>
      <button
        className="page-num"
        onClick={() => {
          handlePageNum(1);
        }}
      >
        1
      </button>
      <button
        className="page-num"
        onClick={() => {
          handlePageNum(2);
        }}
      >
        2
      </button>
      <button
        className="page-num"
        onClick={() => {
          handlePageNum(3);
        }}
      >
        3
      </button>
      <button
        className="page-num"
        onClick={() => {
          handlePageNum(4);
        }}
      >
        4
      </button>
      <button
        className="page-num"
        onClick={() => {
          handlePageNum(5);
        }}
      >
        5
      </button>
      <button>
        <img src={ArrowRight} alt="오른쪽페이지이동" />
      </button>
    </div>
  );
}

export default PagiNationBar;
