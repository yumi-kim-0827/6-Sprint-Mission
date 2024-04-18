import { orderAtom } from "contexts/atoms/order";
import useDeviceState from "hooks/useDeviceState";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import styles from "../Input.module.scss";
import SortIcon from "assets/icon/ic_sort.svg";
import ArrowDownIcon from "assets/icon/ic_arrow_down.svg";

export default function SelectInput() {
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
