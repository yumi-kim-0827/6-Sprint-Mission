import React, { ChangeEvent } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  onSelect: (value: string) => void;
}

export default function Dropdown({ onSelect }: DropdownProps) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <div className={styles.dropDown}>
      <select
        id="sort"
        onChange={handleSelect}
        className={styles.dropDowntoggle}
      >
        <option value="latest">최신 순</option>
        <option value="likes">좋아요 순</option>
      </select>
    </div>
  );
}
