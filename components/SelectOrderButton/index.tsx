import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FAVORITE, RECENT } from "@/constants/sortBy";
import Image from "next/image";
import ic_arrow from "@/images/ic_arrow_down.svg";
import ic_sort from "@/images/ic_sort.svg";
import { MOBILE_WIDTH } from "@/constants/screenSizes";

interface Props {
  handleSelectOption: (value: string) => void;
  currentOrder: string;
}
const SelectOrderButton = ({ handleSelectOption, currentOrder }: Props) => {
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [mobileVersion, setMobileVersion] = useState(false);

  const handleSelectButton = () => {
    setShowSelectBox(!showSelectBox);
  };

  const handleOrderButton = (value: string) => {
    handleSelectOption(value);
    setShowSelectBox(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_WIDTH) {
        setMobileVersion(true);
      } else {
        setMobileVersion(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.select_btn} onClick={handleSelectButton}>
        {mobileVersion ? "" : currentOrder === RECENT ? "최신순" : "좋아요순"}
        <Image
          src={mobileVersion ? ic_sort : ic_arrow}
          alt="정렬 아이콘"
          width={24}
          height={24}
        />
      </button>
      {showSelectBox && (
        <ul className={styles.select_options}>
          <li onClick={() => handleOrderButton(RECENT)}>최신순</li>
          <li onClick={() => handleOrderButton(FAVORITE)}>좋아요순</li>
        </ul>
      )}
    </div>
  );
};

export default SelectOrderButton;
