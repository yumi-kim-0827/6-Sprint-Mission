import style from "../styles/Pagination.css";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

const Pagination = ({ page, onClick, pageArr, setPage }) => {
  return (
    <>
      <ul className={cn("page-list")}>
        <li>
          <button className={cn("page-btn")}>&lt;</button>
        </li>
        {pageArr &&
          pageArr.map((num) => {
            return (
              <li key={num}>
                <button
                  onClick={() => {
                    onClick();
                    setPage(num);
                  }}
                  className={cn("page-btn", page === num ? "on" : "")}
                >
                  {num}
                </button>
              </li>
            );
          })}
        <li>
          <button className={cn("page-btn")}>&gt;</button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
