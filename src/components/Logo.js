import { useState } from "react";
import logo from "../assets/logo.png";
import logo_mobile from "../assets/logo_mobile.png";
import "../css/Logo.css";

function Logo() {
  const initialValue = window.innerWidth >= 744 ? logo : logo_mobile;
  const [logoImage, setLogoImage] = useState(initialValue);

  const handleImageSize = (e) => {
    window.innerWidth >= 744 ? setLogoImage(logo) : setLogoImage(logo_mobile);
  };

  // window.onresize = handleImageSize; //entireItems랑 덮어씌워짐 -> addEventListener사용해야
  window.addEventListener("resize", handleImageSize);

  return (
    <a href="/">
      <img className="logo__image" src={logoImage} alt="판다마켓 로고"></img>
    </a>
  );
}

export default Logo;
