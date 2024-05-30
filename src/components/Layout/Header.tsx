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
      className={GNBLinkStyles.baseStyle}
    >
      {children}
    </NavLink>
  );
};

const GNBButton = ({ children }: GNBButtonProps) => (
  <BaseButton className="ml-auto h-[42px] w-[88px]">{children}</BaseButton>
);

function Header() {
  return (
    <nav className="fixed top-0 z-20 flex h-[70px] w-full items-center gap-[8px] border-b border-gray-200 bg-white px-[16px] md:px-[24px] xl:px-[200px]">
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
      <div className="mr-[8px] md:hidden">
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
