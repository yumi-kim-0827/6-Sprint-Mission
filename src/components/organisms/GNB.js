import React from "react";
import Button from "../atoms/Button";
import SmallMainLogo from "../../assets/icon/main_logo_small.svg";
import MainLogo from "../../assets/icon/main_logo.svg";
import styles from "../../styles/layout.module.scss";
import { useMobileDetector } from "../../hooks/useMobileDetect";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function GNB() {
  const { pathname } = useLocation();
  const isMobileWidth = useMobileDetector();

  return (
    <nav className={styles.navbar}>
      <img src={isMobileWidth ? SmallMainLogo : MainLogo} alt="main-logo" />
      <div className={styles["navbar__menus"]}>
        <span className={cn({ [styles.focus]: pathname === "/free-board" })}>
          자유게시판
        </span>
        <span className={cn({ [styles.focus]: pathname === "/items" })}>
          중고마켓
        </span>
      </div>
      <Button text="로그인" />
    </nav>
  );
}
