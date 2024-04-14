import React, { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownContainer = ({ handleNewestClick, handleBestClick }) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };
  const handleItemClick = (order) => {
    if (order === "recent") {
      handleNewestClick();
    } else if (order === "favorite") {
      handleBestClick();
    }
  };

  return (
    <div className="container">
      <label onClick={handleClickContainer}>
        <button>최신순 {isDropdownView ? "▲" : "▼"}</button>
      </label>
      {isDropdownView && <Dropdown handleItemClick={handleItemClick} />}
    </div>
  );
};

export default DropdownContainer;