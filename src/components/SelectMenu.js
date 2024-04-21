import { useCallback, useEffect, useState } from "react";
import styles from "../styles/SelectMenu.module.css";

function SelectMenu({ setOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  const handleSelect = (order, e) => {
    e.target.parentNode.parentNode.classList.remove("active");
    e.target.parentNode.previousSibling.innerHTML = e.target.textContent;
    setOrder(order);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        최신순
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li
            className={styles.popupItem}
            onClick={(e) => handleSelect("recent", e)}
          >
            최신순
          </li>
          <li
            className={styles.popupItem}
            onClick={(e) => handleSelect("favorite", e)}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default SelectMenu;
