"use client";

import Link from "next/link";
import Image from "next/image";
import BaseButton from "@/components/BaseButton";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

interface NavButtonProps {
  children: React.ReactNode;
}

function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 flex items-center gap-[8px] w-full h-[70px] px-[16px] xl:px-[200px] md:px-[24px] border-b border-gray-200 bg-white z-20">
      <Link href="/">
        <div className="hidden md:block lg:mr-[20px]">
          <Image
            src="/images/img_panda-logo.svg"
            alt="판다마켓"
            width={150}
            height={41}
            priority={true}
          />
        </div>
      </Link>
      <div className="md:hidden mr-[8px]">
        <Image
          src="/images/img_panda-logo-typo.svg"
          alt="판다마켓"
          width={81}
          height={40}
          priority={true}
        />
      </div>
      <NavLink href="/boards" active={pathname === "/boards"}>
        자유게시판
      </NavLink>
      <NavLink
        href="/items"
        active={pathname === "/items" || pathname === "/additem"}>
        중고마켓
      </NavLink>

      <NavLoginButton>
        <Link href="/login">로그인</Link>
      </NavLoginButton>
    </nav>
  );
}

const NavLink = ({ href, active, children }: NavLinkProps) => (
  <Link href={href} legacyBehavior>
    <a
      className={`font-bold text-[16px] text-cool-gray-600 ${
        active ? "text-blue" : ""
      } md:w-[109px] md:text-[18px] md:text-center`}>
      {children}
    </a>
  </Link>
);

const NavLoginButton = ({ children }: NavButtonProps) => (
  <BaseButton className="w-[88px] h-[42px] ml-auto">{children}</BaseButton>
);

export default Header;
