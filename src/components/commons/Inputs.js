import React, { useEffect, useRef, useState } from "react";
import styles from "styles/commons.module.scss";
import SearchIcon from "assets/icon/ic_search.svg";
import SortIcon from "assets/icon/ic_sort.svg";
import ArrowDownIcon from "assets/icon/ic_arrow_down.svg";
import { useMobileDetector } from "features/hooks/useMobileDetect";

export function SearchInput() {
  return (
    <div className={styles.search}>
      <input placeholder="검색할 상품을 입력해주세요" />
      <img src={SearchIcon} alt="search-icon" />
    </div>
  );
}

export function SelectInput() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("최신순");
  const isMobileWidth = useMobileDetector();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdownBtn} onClick={toggleDropdown}>
        {isMobileWidth ? (
          <img src={SortIcon} alt="sort-icon" />
        ) : (
          <div className={styles.select}>
            <span>{sortBy}</span>
            <img src={ArrowDownIcon} alt="arrow-down" />
          </div>
        )}
      </div>
      {isDropdownOpen && (
        <ul className={styles.dropdown__contents}>
          <li
            onClick={() => {
              setSortBy("최신순");
            }}
          >
            최신순
          </li>
          <li
            onClick={() => {
              setSortBy("좋아요순");
            }}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
