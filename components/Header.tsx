import Image from "next/image";
import Link from "next/link";
import pandaLogo from "@/public/pandalogo.svg";
import userProfile from "@/public/userprofile.svg";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles["Header-container"]}>
          <Link href="/">
            <Image src={pandaLogo} alt="판다마켓 로고" />
          </Link>
          <Link href="/boards">자유게시판</Link>
          <Link href="/">중고마켓</Link>
        </div>
        <div>
          <Link href="/">
            <Image src={userProfile} alt="유저 프로필 사진" />
          </Link>
        </div>
      </div>
    </>
  );
}
