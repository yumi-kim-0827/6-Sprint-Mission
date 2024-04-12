import React from "react";
import "./Footer.css";
import twittericon from "../assets/ic-twitter.png";
import facebookicon from "../assets/ic-facebook.png";
import youtubeicon from "../assets/ic-youtube.png";
import instagramicon from "../assets/ic-instagram.png";

function Footer() {
  return (
    <footer>
      <div className="info-container">
        <p className="info">©Codeit - 2024</p>
        <div className="policy-container">
          <a href="./privacy.html">
            <p>Privacy Policy</p>
          </a>
          <a href="./faq.html">
            <p>FAQ</p>
          </a>
        </div>
        <div className="link-container">
          <a href="https://facebook.com" target="_blank">
            <img src={facebookicon} alt="페이스북 링크" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twittericon} alt="트위터 링크" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src={instagramicon} alt="인스타그램 링크" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={youtubeicon} alt="인스타그램 링크" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
