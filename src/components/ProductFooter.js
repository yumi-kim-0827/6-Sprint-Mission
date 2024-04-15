import { Link, NavLink } from "react-router-dom";
import prevBtnImg from "../assets/items/page_prev_active.svg";
import nextBtnImg from "../assets/items/page_next_active.svg";
import firstPageBtnImg from "../assets/items/page1_active.svg";
import secondPageBtnImg from "../assets/items/page2.svg";
import thirdPageBtnImg from "../assets/items/page3.svg";
import fourthPageBtnImg from "../assets/items/page4.svg";
import fifthPageBtnImg from "../assets/items/page5.svg";

import "./ProductFooter.css";

function ProductFooter() {
  return (
    <>
      <footer className="footer_container">
        <Link className="footer_prev_btn">
          <img className="prev_page_img" src={prevBtnImg} alt=""></img>
        </Link>

        <NavLink className="footer_first_page_btn">
          <img className="first_page_img" src={firstPageBtnImg} alt=""></img>
        </NavLink>

        <NavLink className="footer_second_page_btn">
          <img className="second_page_img" src={secondPageBtnImg} alt=""></img>
        </NavLink>

        <NavLink className="footer_third_page_btn">
          <img className="third_page_img" src={thirdPageBtnImg} alt=""></img>
        </NavLink>

        <NavLink className="footer_fourth_page_btn">
          <img className="fourth_page_img" src={fourthPageBtnImg} alt=""></img>
        </NavLink>

        <NavLink className="footer_fifth_page_btn">
          <img className="fifth_page_img" src={fifthPageBtnImg} alt=""></img>
        </NavLink>

        <Link className="footer_next_btn_btn">
          <img className="next_page_img" src={nextBtnImg} alt=""></img>
        </Link>
      </footer>
    </>
  );
}

export default ProductFooter;
