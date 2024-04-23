import "../../styles/Items/DropdownOrder.css";
import ICON_DOWN from "../../assets/icon_down.svg";
import ICON_SORT from "../../assets/icon_sort.svg";
import { useState } from "react";

const DropdownOrder = ({ order, orderChangeHandler, displaySize }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const clickHandler = (orderText) => {
    orderChangeHandler(orderText);
  };

  return (
    <div
      className="DropdownOrderWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="DropdownOrder">
        {displaySize === "mobile" ? (
          <img src={ICON_SORT} style={{ width: "24px", height: "24px" }} />
        ) : (
          <>
            {order}
            <img src={ICON_DOWN} alt="내리기 아이콘" />
          </>
        )}
      </div>
      <div className="DropdownList">
        <div
          className={`DropdownWrapper ${showDropdown ? "show" : ""} ${
            displaySize === "mobile" ? "mobile" : ""
          }`}
        >
          <ul>
            <li
              onClick={() => {
                clickHandler("최신순");
              }}
            >
              최신순
            </li>
            <li
              onClick={() => {
                clickHandler("좋아요순");
              }}
            >
              좋아요순
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownOrder;
