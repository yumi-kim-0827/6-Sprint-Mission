import React, { useEffect, useRef, useState } from "react";
import styles from "styles/commons.module.scss";
import SearchIcon from "assets/icon/ic_search.svg";
import SortIcon from "assets/icon/ic_sort.svg";
import ArrowDownIcon from "assets/icon/ic_arrow_down.svg";
import useDeviceState from "hooks/useDeviceState";
import { orderAtom } from "context/atoms/order";
import { useAtom } from "jotai";
import { addCommas } from "utils/commas";

export function SearchInput({ value, onChange }) {
  return (
    <div className={styles.search}>
      <input
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <img src={SearchIcon} alt="search-icon" />
    </div>
  );
}

export function SelectInput() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [order, setOrder] = useAtom(orderAtom);
  const { isMobileWidth } = useDeviceState();
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
            <span>{order}</span>
            <img src={ArrowDownIcon} alt="arrow-down" />
          </div>
        )}
      </div>
      {isDropdownOpen && (
        <ul className={styles.dropdown__contents}>
          <li onClick={() => setOrder("최신순")}>최신순</li>
          <li onClick={() => setOrder("좋아요순")}>좋아요순</li>
        </ul>
      )}
    </div>
  );
}

export function FormInput({ name, value, onChange, placeholder }) {
  return (
    <div className={styles.form__input}>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export function NumberInput({ name, value: number, onChange, placeholder }) {
  const [priceStr, setPriceStr] = useState("");

  useEffect(() => {
    if (isNaN(number)) return;
    if (number === 0) setPriceStr("");
    else setPriceStr(addCommas(String(number)));
  }, [number]);

  return (
    <div className={styles.form__input}>
      <input
        name={name}
        placeholder={placeholder}
        value={priceStr}
        onChange={onChange}
        required
      />
    </div>
  );
}

export function FormTextarea({ content, onChange, placeholder }) {
  return (
    <div className={styles.form__textarea}>
      <textarea placeholder={placeholder} value={content} onChange={onChange} />
    </div>
  );
}
