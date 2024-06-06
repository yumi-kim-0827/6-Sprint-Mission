import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <h1>
          <Link href="/">
            <Image src="/logo.png" alt="로고" width="150" height="51" />
          </Link>
        </h1>
        <ul className={styles.header_menu}>
          <li>
            <Link href="/">자유게시판</Link>
          </li>
          <li>
            <Link href="/additem">중고마켓</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
