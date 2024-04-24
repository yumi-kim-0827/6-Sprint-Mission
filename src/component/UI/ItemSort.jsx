import React, { useState } from "react";
import { ReactComponent as Sort } from "../../assets/ic_sort.svg";

function ItemSort({ orderRecent, orderFavorite }) {
  const [isClick, setIsClick] = useState(false);
  const [name, setName] = useState("최신순");

  const toggleClick = () => {
    setIsClick(!isClick);
  };

  const handleItemClick = (itemName) => {
    setName(itemName);
    setIsClick(false);
  };

  return (
    <div className="dropdownList">
      <div onClick={toggleClick}>
        <span>{name}</span>
        <Sort />
      </div>
      {isClick && (
        <ul>
          <li
            className="dropdownItem"
            onClick={() => handleItemClick("최신순")}
          >
            최신순
          </li>
          <li
            className="dropdownItem"
            onClick={() => handleItemClick("좋아요순")}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
export default ItemSort;
