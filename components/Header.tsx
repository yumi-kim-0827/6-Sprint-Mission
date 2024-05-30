import styled from "styled-components";
import React from "react";
import Logo from "@/images/logo.svg";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <HeaderContainer>
          <MenuContainer>
            <Link href="/" passHref>
              <LogoLink>
                <Logo />
              </LogoLink>
            </Link>
            <nav style={{ display: "flex", gap: "20px" }}>
              <FreeBoard href="/boards">자유게시판</FreeBoard>
              <Link href="/items" passHref>
                <UsedMarket>중고마켓</UsedMarket>
              </Link>
            </nav>
          </MenuContainer>
          <Login href="/login">로그인</Login>
        </HeaderContainer>
      ) : (
        "This is never prerendered"
      )}
    </>
  );
}

const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: sticky;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  display: flex;
  background: #ffffff;
  border-bottom: 1px solid #dfdfdf;
  align-items: center;
  z-index: 2;
`;

const MenuContainer = styled.div`
  margin-left: 200px;
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 1199px) {
    margin-left: 24px;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

const FreeBoard = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #4b5563;
`;

const UsedMarket = styled.a`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3692ff;
`;

const Login = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 42px;
  margin: 0 200px 0 auto;
  background: #3692ff;
  border-radius: 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  @media (max-width: 1199px) {
    margin: 0 24px 0 auto;
  }
`;

export default Header;
