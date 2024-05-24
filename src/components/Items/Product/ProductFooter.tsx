import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as LeftArrow } from "../../../assets/images/items/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/items/arrow_right.svg";

import "./ProductFooter.css";

function ProductFooter() {
  return (
    <>
      <footer className="footer_container">
        <Link className="footer_btn footer_prev_btn">
          <LeftArrow />
        </Link>

        <NavLink className="footer_btn page_btn">1</NavLink>

        <NavLink className="footer_btn page_btn">2</NavLink>

        <NavLink className="footer_btn page_btn">3</NavLink>

        <NavLink className="footer_btn page_btn">4</NavLink>

        <NavLink className="footer_btn page_btn">5</NavLink>

        <Link className="footer_btn footer_next_btn">
          <RightArrow />
        </Link>
      </footer>
    </>
  );
}

export default ProductFooter;
