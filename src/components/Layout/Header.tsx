"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import BaseButton from "@/components/BaseButton";

interface GNBNavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface GNBButtonProps {
  children: React.ReactNode;
}

const GNBLinkStyles = {
  activeStyle: "text-blue",
  inactiveStyle: "text-cool-gray-600",
  baseStyle: "font-bold text-[16px] md:w-[109px] md:text-[18px] md:text-center",
};

const GNBNavLink = ({ href, children }: GNBNavLinkProps) => {
  return (
    <NavLink
      href={href}
      activeClassName={GNBLinkStyles.activeStyle}
      inactiveClassName={GNBLinkStyles.inactiveStyle}
      className={GNBLinkStyles.baseStyle}>
      {children}
    </NavLink>
  );
};

const GNBButton = ({ children }: GNBButtonProps) => (
  <BaseButton className="w-[88px] h-[42px] ml-auto">{children}</BaseButton>
);

function Header() {
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
      <GNBNavLink href="/boards">자유게시판</GNBNavLink>
      <GNBNavLink href="/items">중고마켓</GNBNavLink>
      <GNBButton>
        <Link href="/login">로그인</Link>
      </GNBButton>
    </nav>
  );
}

export default Header;
