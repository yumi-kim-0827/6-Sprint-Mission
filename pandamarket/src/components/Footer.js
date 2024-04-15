import React from "react";
import "../styles/style.css";
import styles from "../styles/main.module.css";

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
                src="/assets/icon_facebook.png"
                alt="facebook"
                className={styles.icon}
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/icon_twitter.png"
                alt="twitter"
                className={styles.icon}
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/icon_youtube.png"
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
                src="/assets/icon_insta.png"
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
