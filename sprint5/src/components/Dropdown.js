import React from "react";

function Dropdown({ handleItemClick }) {
  return (
    <ul>
      <li onClick={() => handleItemClick("recent")}>최신순</li>
      <li onClick={() => handleItemClick("favorite")}>인기순</li>
    </ul>
  );
}

export default Dropdown;
