import { useCallback, useEffect, useState } from "react";
import styles from "./ToggleMenu.module.css";

function ToggleMenu({ onNewestClick, onBestClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.toggleMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        최신순
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <div className={styles.newestBtn}>
            <li className={styles.disabled}>
              <button onClick={onNewestClick}>최신순</button>
            </li>
          </div>
          <li className={styles.disabled}>
            <button onClick={onBestClick}>좋아요순</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ToggleMenu;
