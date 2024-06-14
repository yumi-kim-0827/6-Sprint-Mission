import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/pages/components/Header.module.scss";
import Button from "@/pages/components/Button";
import Menu from "@/pages/components/Menu";

interface HeaderProps {
  menuData: { href: string; menuName: string }[];
}
const Header: React.FC<HeaderProps> = ({ menuData }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <h1 className={styles.header_logo}>
          <Link href="/">
            <Image src="/logo.png" alt="로고" width="150" height="51" />
          </Link>
        </h1>
        <Menu menuData={menuData} />
        <div className={styles.header_button}>
          <Button
            text={"로그인"}
            className={"btn_style"}
            onClick={() => router.push("/login")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
