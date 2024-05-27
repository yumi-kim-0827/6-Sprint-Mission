import React from "react";
import { Link, NavLink } from "react-router-dom";

import leftArrow from "../../../assets/images/items/arrow_left.svg";
import rightArrow from "../../../assets/images/items/arrow_right.svg";

import "./ProductFooter.css";

function ProductFooter() {
  return (
    <>
      <footer className="footer_container">
        <Link className="footer_btn footer_prev_btn" to={""}>
          <img src={leftArrow} alt="왼쪽으로" />
        </Link>

        <NavLink className="footer_btn page_btn" to={""}>
          1
        </NavLink>

        <NavLink className="footer_btn page_btn" to={""}>
          2
        </NavLink>

        <NavLink className="footer_btn page_btn" to={""}>
          3
        </NavLink>

        <NavLink className="footer_btn page_btn" to={""}>
          4
        </NavLink>

        <NavLink className="footer_btn page_btn" to={""}>
          5
        </NavLink>

        <Link className="footer_btn footer_next_btn" to={""}>
          <img src={rightArrow} alt="오른쪽으로" />
        </Link>
      </footer>
    </>
  );
}

export default ProductFooter;
