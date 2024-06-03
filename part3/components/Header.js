import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <Image fill src="/logo_face.png" alt="판다마켓" />
      </div>
      <ul className={styles.navMenu}>
        <Link className={styles.linkStyles} href="/boards">
          자유게시판
        </Link>
        <Link className={styles.linkStyles} href="/">
          중고마켓
        </Link>
      </ul>
      <div className={styles.loginBtn}>
        <p className={styles.loginBtnText}>로그인</p>
      </div>
    </header>
  );
}

export default Header;
