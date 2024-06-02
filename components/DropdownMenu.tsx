import React, { useState } from "react";
import styles from "@/styles/DropdownMenu.module.css";
import Image from "next/image";
import arrowdown from "@/public/arrowdown.svg";
import sort from "@/public/sort.svg";

interface DropDownProps {
  orderBySort: (orderby: string) => void;
}

export default function DropdownMenu({ orderBySort }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("최신순");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    if (selectedOption === "최신순") {
      orderBySort("recent");
    } else {
      orderBySort("like");
    }
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles["dropdown-toggle"]}>
        <div>{selectedOption}</div>
        <Image
          className={styles["dropdown-toggle-img"]}
          width={24}
          height={24}
          src={arrowdown}
          alt="드롭다운 화살표"
        />
        <Image
          className={styles["dropdown-toggle-mob"]}
          width={24}
          height={24}
          src={sort}
          alt="모바일 드롭다운"
        />
      </button>
      {isOpen && (
        <div className={styles["dropdown-menu"]}>
          <div
            onClick={() => handleOptionClick("최신순")}
            className={styles["dropdown-item"]}
          >
            최신순
          </div>
          <div
            onClick={() => handleOptionClick("좋아요순")}
            className={styles["dropdown-item"]}
          >
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}
