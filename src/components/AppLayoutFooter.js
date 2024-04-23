import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ALinkImageButton from "./ALinkImageButton";

import IconFacebook from "../assets/icon/facebook.svg";
import IconTwitter from "../assets/icon/twitter.svg";
import IconYoutube from "../assets/icon/youtube.svg";
import IconInstagram from "../assets/icon/insta.svg";

const AppLayoutFooter = () => {
  return (
    <StyledFooter className="footer">
      <FooterInner>
        <CopyrightInfo>@codeit - 2024</CopyrightInfo>
        <MenuLinks>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </MenuLinks>
        <SocialLinks>
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
        </SocialLinks>
      </FooterInner>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 160px;
  background-color: var(--color-gray-900);
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-areas:
    "MenuLinks SocialLinks"
    "CopyrightInfo CopyrightInfo";
  width: 100%;
  padding: 32px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.09px;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    padding: 32px 108px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1520px;
    padding: 32px 200px;
  }
`;

const CopyrightInfo = styled.div`
  grid-area: CopyrightInfo;
  margin-top: 60px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1200px) {
    opacity: 1;
  }
`;

const MenuLinks = styled.div`
  grid-area: MenuLinks;
  display: flex;
  gap: 30px;
`;

const SocialLinks = styled.div`
  grid-area: SocialLinks;
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default AppLayoutFooter;
