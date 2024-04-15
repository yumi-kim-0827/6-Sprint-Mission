import "./SortSelectBox.css";
import { useState } from "react";

function SortSelectBox({ className, order, onClick }) {
  const [isVisible, setIsVisible] = useState(false);

  const orderName = {
    createdAt: "최신순",
    favoriteCount: "좋아요순",
  };

  const showSortOption = () => {
    setIsVisible(!isVisible);
  };

  const handleNewestClick = () => {
    onClick("createdAt");
    setIsVisible(false);
  };
  const handleFavoriteClick = () => {
    onClick("favoriteCount");
    setIsVisible(false);
  };

  return (
    <div className={`sort-select-box ${className}`}>
      <button
        className="sort-select-box__button mobile"
        onClick={showSortOption}
      >
        <i className="icon-sort"></i>
      </button>
      <button
        className="sort-select-box__button desktop"
        onClick={showSortOption}
      >
        <p>{orderName[order]}</p> <i className="icon-arrow-down"></i>
      </button>
      <div
        className="sort-select-box__option-box"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <button className="sort-select-box__option" onClick={handleNewestClick}>
          최신순
        </button>
        <button
          className="sort-select-box__option"
          onClick={handleFavoriteClick}
        >
          좋아요순
        </button>
      </div>
    </div>
  );
}

export default SortSelectBox;
