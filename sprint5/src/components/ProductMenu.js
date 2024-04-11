import React, { useState } from "react";
import Button from "./Button";
import DropdownContainer from "./DropdownContainer.js";

function ProductMenu({
  title,
  button,
  dropdown,
  handleNewestClick,
  handleBestClick,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {dropdown && (
          <DropdownContainer
            handleNewestClick={handleNewestClick}
            handleBestClick={handleBestClick}
          />
        )}
        {button && <Button text="상품 등록하기" link="/additem" />}
      </div>
    </div>
  );
}

export default ProductMenu;
