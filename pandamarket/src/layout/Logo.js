import logoPC from "../img/logo_img.png";
import logoMobile from "../img/logo_typo.png";

export function Logo ({children}) {
  
  return (
    <h1 className="header__logo">
      <a href="/" className="link">
        <picture className="img-logo">
          <source srcSet={logoMobile} media="(max-width: 768px)" width="103"/>
          <source srcSet={logoPC} media="(min-width: 769px)" width="153"/>
          <img src={logoMobile} alt={children + ' 로고 이미지'}/>
        </picture>
        <span className="blind">{children}</span>
      </a>
    </h1>
  );
}