import React, { useState, useEffect } from "react";

interface DropdownContainerProps {
  onSortByNewest: () => void;
  onSortByBest: () => void;
  order: string;
}

const Dropdown = ({
  onSortByNewest,
  onSortByBest,
  order,
}: DropdownContainerProps) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const text = order === "recent" ? "최신순" : "인기순";
    setButtonText(text);
  }, [order]);

  const handleClickContainer = () => {
    setDropdownView((prevState) => !prevState);
  };

  const handleItemClick = (clickHandler: () => void) => {
    clickHandler();
    setDropdownView(false);
  };

  return (
    <div>
      <div className="dropdown-container" onClick={handleClickContainer}>
        <button className="dropdown-button">{buttonText} ▼</button>
        {isDropdownView && (
          <ul className="dropdown-items">
            <li
              className="dropdown-item"
              onClick={() => handleItemClick(onSortByNewest)}
            >
              최신순
            </li>
            <li
              className="dropdown-item"
              onClick={() => handleItemClick(onSortByBest)}
            >
              인기순
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
