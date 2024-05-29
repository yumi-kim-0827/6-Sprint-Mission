import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import BaseButton from "@/components/BaseButton";

function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <StyledNavbar>
      <Link href="/">
        <StyledNavLogo>
          <Image fill src="/images/img_panda-logo.svg" alt="판다마켓" />
        </StyledNavLogo>
        <StyledNavLogoTypo>
          <Image fill src="/images/img_panda-logo-typo.svg" alt="판다마켓" />
        </StyledNavLogoTypo>
      </Link>
      <StyledNavLink
        href="/boards"
        className={pathname === "/boards" ? "active" : ""}>
        자유게시판
      </StyledNavLink>
      <StyledNavLink
        href="/items"
        className={
          pathname === "/items" || pathname === "/additem" ? "active" : ""
        }>
        중고마켓
      </StyledNavLink>
      <Link href="/login">
        <NavLoginButton size="small">로그인</NavLoginButton>
      </Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid #dfdfdf;
  background-color: #fff;
  z-index: 2;

  a:last-of-type {
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    gap: 0px;
    padding: 0 24px;
  }

  @media screen and (min-width: 1200px) {
    gap: 0px;
    padding: 0 200px;
  }
`;

const StyledNavLogo = styled.div`
  position: relative;
  display: none;
  width: 150px;
  height: 41px;

  Image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`;

const StyledNavLogoTypo = styled.div`
  position: relative;
  width: 81px;
  height: 40px;
  margin-right: 8px;

  Image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-cool-gray-600);

  &.active {
    color: var(--color-blue);
  }

  @media screen and (min-width: 768px) {
    width: 109px;
    font-size: 18px;
    text-align: center;
  }
`;

const NavLoginButton = styled(BaseButton)`
  width: 88px;
  height: 42px;
`;

export default Header;
