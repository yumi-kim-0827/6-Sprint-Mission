import Link from "next/link";
import logoImg from "@/public/logo.svg";
import styles from "./Header.module.css";
import Image from "next/image";
import profileImg from "@/public/btn_visibility.svg";

export default function Header() {
  return (
    <header className={styles.globalHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.headerLogo}>
          <Image src={logoImg} width={180} height={26} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/boards" passHref>
                자유게시판
              </Link>
            </li>
            <li>
              <Link href="/items" passHref>
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.headerRight}>
          <Image src={profileImg} alt="프로필" />
        </div>
      </div>
    </header>
  );
}
