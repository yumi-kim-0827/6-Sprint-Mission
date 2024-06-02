import React, { ReactNode } from "react";
import facebookLogo from "@/src/assets/images/social/facebook-logo.svg";
import twitterLogo from "@/src/assets/images/social/twitter-logo.svg";
import youtubeLogo from "@/src/assets/images/social/youtube-logo.svg";
import instagramLogo from "@/src/assets/images/social/instagram-logo.svg";
import style from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

type FooterChildrenProps = {
  children: ReactNode;
};

function Copyright({ children }: FooterChildrenProps) {
  return <div className={style.copyright}>{children}</div>;
}

function FooterMenu({ children }: FooterChildrenProps) {
  return <div className={style.footer_menu}>{children}</div>;
}

function SocialMedia({ children }: FooterChildrenProps) {
  return <div className={style.social_media}>{children}</div>;
}

export default function Footer() {
  return (
    <div className={style.footer}>
      <Copyright>©codeit - 2024</Copyright>

      <FooterMenu>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/faq">FAQ</Link>
      </FooterMenu>

      <SocialMedia>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="판다마켓 페이스북"
        >
          <div className={style.image}>
            <Image fill src={facebookLogo} alt="페이스북" />
          </div>
        </Link>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="판다마켓 트위터"
        >
          <div className={style.image}>
            <Image fill src={twitterLogo} alt="트위터" />
          </div>
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="판다마켓 유튜브"
        >
          <div className={style.image}>
            <Image fill src={youtubeLogo} alt="유튜브" />
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="판다마켓 인스타그램"
        >
          <div className={style.image}>
            <Image src={instagramLogo} alt="인스타그램" />
          </div>
        </Link>
      </SocialMedia>
    </div>
  );
}
