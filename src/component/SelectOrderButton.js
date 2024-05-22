import React, { useState } from "react";

const SelectOrderButton = ({ handleSelectOption, currentOrder }) => {
  const [showSelectBox, setShowSelectBox] = useState(false);

  const handleSelectButton = () => {
    setShowSelectBox(!showSelectBox);
  };

  const handleOrderButton = (value) => {
    handleSelectOption(value);
    setShowSelectBox(false);
  };

  return (
    <div className="product-sort-select">
      <button className="product-sort-select-btn" onClick={handleSelectButton}>
        {currentOrder === "recent" ? "최신순" : "좋아요순"}
      </button>
      {showSelectBox && (
        <ul className="product-sort-select-option-list">
          <li onClick={() => handleOrderButton("recent")}>최신순</li>
          <li onClick={() => handleOrderButton("favorite")}>좋아요순</li>
        </ul>
      )}
    </div>
  );
};

export default SelectOrderButton;
