import React, { useState } from "react";

const DropdownContainer = ({ onNewestClick, onBestClick }) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView((prevState) => !prevState);
  };

  const handleItemClick = (clickHandler) => {
    clickHandler();
    setDropdownView(false);
  };

  return (
    <div className="container">
      <div onClick={handleClickContainer}>
        <button>최신순 {isDropdownView ? "▲" : "▼"}</button>
        {isDropdownView && (
          <ul>
            <li onClick={() => handleItemClick(onNewestClick)}>최신순</li>
            <li onClick={() => handleItemClick(onBestClick)}>인기순</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownContainer;
