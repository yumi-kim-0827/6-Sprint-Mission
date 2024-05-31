import React, { useState, useEffect } from "react";
import styles from "./Dropdown.module.css";

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
      <div className={styles.dropdownContainer} onClick={handleClickContainer}>
        <button className={styles.dropdownButton}>
          {buttonText} &nbsp;&nbsp; ▼
        </button>
        {isDropdownView && (
          <ul className={styles.dropdownItems}>
            <li
              className={styles.dropdownItem}
              onClick={() => handleItemClick(onSortByNewest)}
            >
              최신순
            </li>
            <li
              className={styles.dropdownItem}
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
