import Image from "next/image";
import Link from "next/link";
import pandaLogo from "@/public/pandalogo.svg";
import pandatext from "@/public/pandatext.svg";
import userProfile from "@/public/userprofile.svg";
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <>
      <div className={styles.Header}>
        <div className={styles["Header-container"]}>
          <Link href="/">
            <Image
              className={styles["Header-logo"]}
              src={pandaLogo}
              alt="판다마켓 로고"
            />
            <Image
              className={styles["Header-logo-mob"]}
              src={pandatext}
              alt="모바일 판다마켓 로고"
            />
          </Link>
          <div className={styles["Header-link-container"]}>
            <Link
              className={
                styles[
                  pathname === "/boards" ? "Header-link-act" : "Header-link"
                ]
              }
              style={{ textDecoration: "none" }}
              href="/boards"
            >
              자유게시판
            </Link>
            <Link
              className={
                styles[
                  pathname === "/items" ? "Header-link-act" : "Header-link"
                ]
              }
              style={{ textDecoration: "none" }}
              href="/"
            >
              중고마켓
            </Link>
          </div>
        </div>
        <div className={styles["Header-profile"]}>
          <Link href="/">
            <Image
              width={40}
              height={40}
              src={userProfile}
              alt="유저 프로필 사진"
            />
          </Link>
        </div>
      </div>
      <div className={styles["Header-empty"]}></div>
    </>
  );
}
