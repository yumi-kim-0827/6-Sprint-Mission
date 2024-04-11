import React, { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownContainer = ({ handleNewestClick, handleBestClick }) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };
  const handleItemClick = (order) => {
    if (order === "createdAt") {
      handleNewestClick();
    } else if (order === "favoriteCount") {
      handleBestClick();
    }
  };

  return (
    <div className="container">
      <label onClick={handleClickContainer}>
        <button>Dropdown Menu {isDropdownView ? "▲" : "▼"}</button>
      </label>
      {isDropdownView && <Dropdown handleItemClick={handleItemClick} />}
    </div>
  );
};

export default DropdownContainer;
