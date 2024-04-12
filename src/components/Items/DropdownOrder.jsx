import "../../styles/Items/DropdownOrder.css";
import ICON_DOWN from "../../assets/icon_down.svg";
import { useState } from "react";

const DropdownOrder = ({ order, orderHandler }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const clickHandler = (orderText) => {
    orderHandler(orderText);
  };

  return (
    <div
      className={"DropdownOrderWrapper"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={"DropdownOrder"}>
        {order}
        <img src={ICON_DOWN} alt={"내리기 아이콘"} />
      </div>
      <div className={"DropdownList"}>
        <div
          className={["DropdownWrapper", showDropdown ? "show" : ""].join(" ")}
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
