import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import facebookIcon from "@/public/assets/Footer/ic-facebook.png";
import youtubeIcon from "@/public/assets/Footer/ic-youtube.png";
import instagramIcon from "@/public/assets/Footer/ic-instagram.png";
import twitterIcon from "@/public/assets/Footer/ic-twitter.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles["info-container"]}>
        <p className={styles.info}>©Codeit - 2024</p>
        <div className={styles["policy-container"]}>
          <Link href="/privacy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/faq">
            <span>FAQ</span>
          </Link>
        </div>
        <div className={styles["link-container"]}>
          <Link href="https://facebook.com" target="_blank">
            <Image className={styles.img} src={facebookIcon} alt="페이스북 링크" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image className={styles.img} src={twitterIcon} alt="트위터 링크" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Image className={styles.img} src={instagramIcon} alt="인스타그램 링크" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image className={styles.img} src={youtubeIcon} alt="인스타그램 링크" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
