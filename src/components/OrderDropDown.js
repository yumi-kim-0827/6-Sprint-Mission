import { useState } from "react";
import ArrowDownIcon from "../assets/icon/ic_arrow_down.svg";
import { ORDER_MESSAGE } from "../utils/magicLiterals";
import "./OrderDropDown.css";

function OrderDropDown({ order, setOrder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [orderMessage, setOrderMessage] = useState(ORDER_MESSAGE[order]);
  const handleDropDownClick = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleMenuClick = (e) => {
    const newOrder = e.target.dataset.value;
    setOrder(newOrder);
    setOrderMessage(ORDER_MESSAGE[newOrder]);
    setIsOpen(false);
  };

  return (
    <div className="drop-down">
      <button className="drop-down-button" onClick={handleDropDownClick}>
        <span>{orderMessage}</span>
        <img src={ArrowDownIcon} alt="드롭다운" />
      </button>
      {isOpen && (
        <ul className="drop-down-menus">
          <li
            className="drop-down-menu"
            data-value="recent"
            onClick={handleMenuClick}
          >
            최신순
          </li>
          <li
            className="drop-down-menu"
            data-value="favorite"
            onClick={handleMenuClick}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default OrderDropDown;
