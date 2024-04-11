import React, { useEffect, useState } from "react";
import Button from "components/commons/Button";
import SmallMainLogo from "assets/icon/main_logo_small.svg";
import MainLogo from "assets/icon/main_logo.svg";
import styles from "styles/layout.module.scss";
import { useMobileDetector } from "features/hooks/useMobileDetect";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cn = classNames.bind(styles);

export default function GNB() {
  const { pathname } = useLocation();
  const isMobileWidth = useMobileDetector();

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={isMobileWidth ? SmallMainLogo : MainLogo} alt="main-logo" />
      </Link>
      <div className={styles.menus}>
        <Link to="/free-board">
          <span className={cn({ [styles.focus]: pathname === "/free-board" })}>
            자유게시판
          </span>
        </Link>
        <Link to="/items">
          <span className={cn({ [styles.focus]: pathname === "/items" })}>
            중고마켓
          </span>
        </Link>
      </div>
      <Button to="/login">로그인</Button>
    </nav>
  );
}
