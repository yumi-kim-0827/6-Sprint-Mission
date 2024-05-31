import { ReactComponent as SortIcon } from "@/src/assets/images/icons/ic_sort.svg";
import { useState } from "react";
import { ProductSortOption } from "../../types/productTypes";
import style from "./DropDownMenu.module.scss";

interface DropdownMenuProps {
  onSortSelection: (sortOption: ProductSortOption) => void;
}

export default function DropdownMenu({ onSortSelection }: DropdownMenuProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={style.sort_button_wrapper}>
      <button
        className={style.sort_dropdown_trigger_button}
        onClick={toggleDropdown}
      >
        <SortIcon />
      </button>

      {isDropdownVisible && (
        <div className={style.dropdown_menu_container}>
          <div
            className={style.dropdown_item}
            onClick={() => {
              onSortSelection("recent");
              setIsDropdownVisible(false);
            }}
          >
            최신순
          </div>
          <div
            className={style.dropdown_item}
            onClick={() => {
              onSortSelection("favorite");
              setIsDropdownVisible(false);
            }}
          >
            인기순
          </div>
        </div>
      )}
    </div>
  );
}
