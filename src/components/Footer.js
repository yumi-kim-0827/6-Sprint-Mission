import React from "react";
import LinkButton from "./LinkButton";

import IconFacebook from "../assets/icon/facebook.svg";
import IconTwitter from "../assets/icon/twitter.svg";
import IconYoutube from "../assets/icon/youtube.svg";
import IconInstagram from "../assets/icon/insta.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-inner__codeit">
          <span>@codeit - 2024</span>
        </div>
        <div className="footer-inner__center">
          <span>
            <a href="/privacy">Privacy Policy</a>
          </span>
          <span>
            <a href="/faq">FAQ</a>
          </span>
        </div>
        <div className="footer-inner__sns">
          <LinkButton
            href="https://facebook.com"
            src={IconFacebook}
            alt="페이스북"
          />
          <LinkButton
            href="https://twitter.com/?lang=ko"
            src={IconTwitter}
            alt="트위터"
          />
          <LinkButton
            href="https://www.youtube.com/"
            src={IconYoutube}
            alt="유튜브"
          />
          <LinkButton
            href="https://www.instagram.com/"
            src={IconInstagram}
            alt="인스타"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
