import React from "react";
import ALinkImageButton from "./ALinkImageButton";

import styled from "styled-components";
import IconFacebook from "../assets/icon/facebook.svg";
import IconTwitter from "../assets/icon/twitter.svg";
import IconYoutube from "../assets/icon/youtube.svg";
import IconInstagram from "../assets/icon/insta.svg";

const Footer = () => {
  return (
    <StyledFooter className="footer">
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
          <ALinkImageButton
            href="https://facebook.com"
            src={IconFacebook}
            alt="페이스북"
          />
          <ALinkImageButton
            href="https://twitter.com/?lang=ko"
            src={IconTwitter}
            alt="트위터"
          />
          <ALinkImageButton
            href="https://www.youtube.com/"
            src={IconYoutube}
            alt="유튜브"
          />
          <ALinkImageButton
            href="https://www.instagram.com/"
            src={IconInstagram}
            alt="인스타"
          />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 160px;
  background-color: var(--color-gray-900);
  font-weight: 400;
  font-size: 16px;
  line-height: 19.09px;
  color: #fff;

  .footer-inner {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    max-width: 1520px;
    padding: 32px 200px;
  }

  .footer-inner__center {
    display: flex;
    gap: 30px;
  }

  .footer-inner__sns {
    display: flex;
    gap: 12px;
  }

  /* tablet */
  @media screen and (max-width: 1199px) {
    .footer-inner {
      padding: 32px 108px;
    }

    .footer-inner__codeit {
      opacity: 0.5;
    }
  }

  /* mobile */
  @media screen and (max-width: 767px) {
    .footer-inner {
      display: grid;
      grid-template-areas:
        "cen sns"
        "codeit codeit";
      padding: 32px 16px;
    }
    .footer-inner__codeit {
      grid-area: codeit;
      margin-top: 60px;
    }
    .footer-inner__center {
      grid-area: cen;
    }
    .footer-inner__sns {
      grid-area: sns;
    }
  }
`;
export default Footer;
