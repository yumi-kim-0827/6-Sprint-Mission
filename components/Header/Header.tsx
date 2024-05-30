"use client";
import { useRouter, usePathname } from "next/navigation";
import LogOutIcon from "../../app/assets/images/ic_profile.png";
import Logo from "../../app/assets/images/logo.png";
import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };
  const freeBoardActive = pathname === "/boards";

  const isUsedMarketActive =
    pathname === "/items" ||
    pathname === "/additem" ||
    /^\/items\/\d+$/.test(pathname);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menuContainer}>
        <div onClick={() => router.push("/")}>
          <Image
            src={Logo}
            alt="판다마켓 홈"
            width={135}
            height={50}
            className={styles.pandaLogo}
          />
        </div>
        {isLoggedIn && (
          <>
            <div
              className={`${styles.freeBoard} ${
                freeBoardActive ? styles.freeBoardActive : ""
              }`}
              onClick={() => router.push("/boards")}
            >
              자유게시판
            </div>
            <div
              className={`${styles.usedMarket} ${
                isUsedMarketActive ? styles.usedMarketActive : ""
              }`}
              onClick={() => router.push("/items")}
            >
              중고마켓
            </div>
          </>
        )}
      </div>
      {isLoggedIn ? (
        <div className={styles.logoutIconContainer} onClick={handleLogoutClick}>
          <Image
            src={LogOutIcon}
            alt="로그아웃"
            width={24}
            height={24}
            className={styles.logoutIconImg}
          />
        </div>
      ) : (
        <a className={styles.goLogin} onClick={handleLoginClick}>
          로그인
        </a>
      )}
    </div>
  );
};

export default Header;
