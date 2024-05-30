import { useRef, useState } from "react";

import "../css/Dropdown.css";
import { isMobile } from "../utils/module";

function Dropdown({ order, setOrder, children }) {
  const dropdownRef = useRef();
  const orderPhrase = order === "recent" ? "최신순" : "좋아요순";
  const [dropDown, setDropDown] = useState(() =>
    !isMobile() ? orderPhrase : null,
  );

  const handleDropDown = (e) => {
    !isMobile() ? setDropDown(orderPhrase) : setDropDown(null);
  };

  const toggleDropDown = () => {
    dropdownRef.current.classList.toggle("all-items__dropped--hided");
  };

  window.addEventListener("resize", handleDropDown);

  return (
    <div className="all-items__drop-down" onClick={toggleDropDown}>
      <button className="all-items__order-select">
        {!isMobile() && orderPhrase}
      </button>
      <div
        className="all-items__dropped all-items__dropped--hided"
        ref={dropdownRef}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
