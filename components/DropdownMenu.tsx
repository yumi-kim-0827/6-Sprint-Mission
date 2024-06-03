import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import SortIcon from "@/images/logo/sortIcon.svg";

interface DropdownMenuProps {
  onSortSelection: (value: string) => void;
}

export default function DropdownMenu({ onSortSelection }: DropdownMenuProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={styles.dropdownMenuContainer}>
      <button
        className={styles.sortDropdownTriggerButton}
        onClick={toggleDropdown}
      >
        <img src={SortIcon} alt="Sort Icon" />
      </button>

      {isDropdownVisible && (
        <div className={styles.dropdownMenu}>
          <div
            className={styles.dropdownItem}
            onClick={() => {
              onSortSelection("recent");
              setIsDropdownVisible(false);
            }}
          >
            최신 순
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => {
              onSortSelection("favorite");
              setIsDropdownVisible(false);
            }}
          >
            좋아요 순
          </div>
        </div>
      )}
    </div>
  );
}
