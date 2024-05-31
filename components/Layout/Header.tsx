import React from "react";

import Logo from "../../src/assets/images/logo/logo.svg";
import style from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const menuItems = [
  { id: "item1", name: "자유게시판", path: "/board" },
  { id: "item2", name: "중고마켓", path: "/additem" },
];

export default function Header() {
  const router = useRouter();

  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <div className={style.homepage}>
          <Link href="/" aria-label="홈으로 이동">
            <Logo />
          </Link>
        </div>
        <nav>
          <ul className={style.nav_list}>
            {menuItems.map((menuItem) => {
              return (
                <li key={menuItem.id} className={style.nav_item}>
                  <Link href={menuItem.path} legacyBehavior>
                    <a
                      style={{
                        textDecoration: "none",
                        color:
                          menuItem.path === router.pathname ? "blue" : "black",
                      }}
                    >
                      {menuItem.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Link href="/login" className={style.login_link}>
        로그인
      </Link>
    </div>
  );
}
