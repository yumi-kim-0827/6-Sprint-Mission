import React from "react";

function Footer() {
  return (
    <div>
      <div className="nav">
        <p className="year">©codeit - 2024</p>
        <div className="nav2">
          <div className="sub_nav">
            <p className="p">
              <a href="./privacy.html">Privacy Policy</a>
            </p>
            <p className="p">
              <a href="./faq.html">FAQ</a>
            </p>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="../assets/icon_facebook.png"
                alt="facebook"
                className="icon"
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img
                src="../assets/icon_twitter.png"
                alt="twitter"
                className="icon"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src="../assets/icon_youtube.png"
                alt="youtube"
                className="icon"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="../assets/icon_insta.png" alt="insta" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
