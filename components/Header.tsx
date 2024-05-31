import React from "react";
import Image from "next/image";
import styles from "@/components/Header.module.css";
import Logo from "@/assets/images/logo/logo.svg";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Image src={Logo} alt="판다마켓 로고" />
          <div>자유게시판</div>
          <div>중고마켓</div>
        </div>

        <button className={styles.login_button}>로그인</button>
      </header>
    </>
  );
}
