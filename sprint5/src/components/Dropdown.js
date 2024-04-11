import React from "react";

function Dropdown({ handleItemClick }) {
  return (
    <ul>
      <li onClick={() => handleItemClick("createdAt")}>최신순</li>
      <li onClick={() => handleItemClick("favoriteCount")}>인기순</li>
    </ul>
  );
}

export default Dropdown;
