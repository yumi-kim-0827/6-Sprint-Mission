import React from "react";
import { ReactComponent as facebookIcon } from "../../../assets/images/icons/ic_facebook.svg";
import { ReactComponent as twitterIcon } from "../../../assets/images/icons/ic_twitter.svg";
import { ReactComponent as youtubeIcon } from "../../../assets/images/icons/ic_youtube.svg";
import { ReactComponent as instagramIcon } from "../../../assets/images/icons/ic_instagram.svg";
import Icon from "../../UI/Icon";

const Footer = () => {
  return (
    <footer>
      <span id="copyright">©codeit - 2024</span>
      <div id="footerMenu">
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </div>
      <div id="socialMedia">
        <a href="https://www.facebook.com/">
          <Icon iconComponent={facebookIcon} outlineColor="none" size={18} />
        </a>
        <a href="https://x.com/">
          <Icon iconComponent={twitterIcon} outlineColor="none" size={18} />
        </a>
        <a href="https://www.youtube.com/">
          <Icon iconComponent={youtubeIcon} outlineColor="none" size={18} />
        </a>
        <a href="https://www.instagram.com/">
          <Icon iconComponent={instagramIcon} outlineColor="none" size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
