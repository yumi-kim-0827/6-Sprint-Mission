import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Button from "@/src/components/Button/Button";

export default function Header() {
  const setCurrentPage = (path: string) => {
    return {
      color:
        typeof window !== "undefined" && window.location.pathname === path
          ? "var(--blue)"
          : "var(--grey-600)",
    };
  };

  return (
    <header className={styles.container}>
      <div className={styles.headerLeft}>
        <Link href="/" passHref>
          <Image
            src="/svgs/logo.svg"
            alt="판다마켓 로고"
            width={154}
            height={50}
          />
        </Link>

        <nav className={styles.navContainer}>
          <Link href="/boards" style={setCurrentPage("/boards")}>
            자유게시판
          </Link>
          <Link href="/items" style={setCurrentPage("/items")}>
            중고마켓
          </Link>
        </nav>
      </div>
      <Button>
        <Link href="/signin" className={styles.signInButton}>
          로그인
        </Link>
      </Button>
    </header>
  );
}
