import React from "react";
import { useState } from "react";

const SelectOrderButton = ({ handleSelectOption, currentOrder }) => {
  const [showSelectBox, setShowSelectBox] = useState(false);

  //정렬 버튼 열기
  const handleSelectButton = () => {
    setShowSelectBox(!showSelectBox);
  };

  //정렬 선택
  const handleOrderButton = (e) => {
    handleSelectOption(e.target.value);
    setShowSelectBox(false);
  };

  return (
    <div className="product-sort-select">
      <button className="product-sort-select-btn" onClick={handleSelectButton}>
        {currentOrder === "recent" ? "최신순" : "좋아요순"}
      </button>
      {showSelectBox && (
        <ul className="product-sort-select-option-list">
          <li value="recent" onClick={handleOrderButton}>
            최신순
          </li>
          <li value="favorite" onClick={handleOrderButton}>
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectOrderButton;
