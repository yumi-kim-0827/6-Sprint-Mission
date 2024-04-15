import "./Logo.css";

import { NavLink } from "react-router-dom";

import { Desktop, Tablet, Mobile } from "./MediaQuery";

import title_img from "../assets/title/title_img.svg";
import title_typo from "../assets/title/title_typo.svg";

function Logo() {
  return (
    <NavLink to={"/"} className="logo_btn">
      <Desktop>
        <img className="logo_img" src={title_img} alt="Desktop_logo_img"></img>
      </Desktop>
      <Tablet>
        <img className="logo_img" src={title_img} alt="Tablet_logo_img"></img>
      </Tablet>
      <Mobile>
        <img className="logo_img" src={title_typo} alt="Mobile_logo_img"></img>
      </Mobile>
    </NavLink>
  );
}

export default Logo;
