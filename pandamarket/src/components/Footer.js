import React from "react";
import "../styles/style.css";
import styles from "../styles/main.module.css";

import icon_facebook from '../assets/icon_facebook.png'
import icon_twitter from '../assets/icon_twitter.png'
import icon_youtube from '../assets/icon_youtube.png'
import icon_insta from '../assets/icon_insta.png'

function Footer() {
  return (
    <footer>
      <div className={styles.nav}>
        <p className={styles.year}>©codeit - 2024</p>
        <div className={styles.nav2}>
          <div className={styles.sub_nav}>
            <p className={styles.p}>
              <a href="./privacy.html">Privacy Policy</a>
            </p>
            <p className={styles.p}>
              <a href="./faq.html">FAQ</a>
            </p>
          </div>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icon_facebook}
                alt="facebook"
                className={styles.icon}
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img
                src={icon_twitter}
                alt="twitter"
                className={styles.icon}
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src={icon_youtube}
                alt="youtube"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icon_insta}
                alt="insta"
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
