import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import longLogo from "@/public/assets/Header/logoWithIcon.png";
import shortLogo from "@/public/assets/Header/logoWithNone.png";

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <>
      <header className={styles.Header}>
        <div className={styles["Header-container"]}>
          <Link href="/">
            <Image className={styles["Header-long-img"]} src={longLogo} alt="판다 아이콘이 포함된 로고" />
            <Image
              className={styles["Header-short-img"]}
              src={shortLogo}
              alt="판다 아이콘이 포함되지 않은 모바일용 로고"
            />
          </Link>
          <ul className={styles["Header-btns"]}>
            <Link href="/boards" className={styles[pathname === "/boards" ? "Header-btn-active" : "Header-btn"]}>
              <li>자유게시판</li>
            </Link>
            <Link href="/Items" className={styles[pathname === "/Items" ? "Header-btn-active" : "Header-btn"]}>
              <li>중고마켓</li>
            </Link>
          </ul>
        </div>
        <Link href="/sign-in" className={styles["Header-login-btn"]}>
          로그인
        </Link>
      </header>
    </>
  );
};

export default Header;
