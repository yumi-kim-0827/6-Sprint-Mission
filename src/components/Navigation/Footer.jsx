import ic_facebook from "../../assets/images/icon/ic_facebook.svg";
import ic_twitter from "../../assets/images/icon/ic_twitter.svg";
import ic_youtube from "../../assets/images/icon/ic_youtube.svg";
import ic_instagram from "../../assets/images/icon/ic_instagram.svg";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="bottom_container">
      <article className="bottom_content">
        <section className="bottom_copyright">©codeit - 2024</section>

        <section className="bottom_middle">
          <Link to="/pages/privacy" className="privacy">
            Privacy Policy
          </Link>

          <Link to="/pages/faq" className="faq">
            FAQ
          </Link>
        </section>

        <section className="bottom_social">
          <a
            className="facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ic_facebook} alt="페이스북" />
          </a>

          <a
            className="twitter"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ic_twitter} alt="트위터" />
          </a>

          <a
            className="youtube"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ic_youtube} alt="유튜브" />
          </a>

          <a
            className="instagram"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ic_instagram} alt="인스타그램" />
          </a>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
