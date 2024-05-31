import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image fill src="/logo_face.png" alt="판다마켓" />
      </div>
      <ul className={styles.navMenu}>
        <li>자유게시판</li>
        <li>중고마켓</li>
      </ul>
      <div className={styles.loginBtn}>
        <p className={styles.loginBtnText}>로그인</p>
      </div>
    </div>
  );
}

export default Header;
