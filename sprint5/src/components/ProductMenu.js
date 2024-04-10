import React from "react";
import Button from "./Button";

function ProductMenu({ title, button }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div></div>
        {button && <Button text="상품 등록하기" link="/additem" />}
        <div></div>
      </div>
    </div>
  );
}

export default ProductMenu;
