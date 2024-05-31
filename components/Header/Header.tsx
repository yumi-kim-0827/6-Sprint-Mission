import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "public/image/image_logo_mobile.png";
import LargerSizeLogo from "public/image/image_logo.png";
import Profile from "public/icon/ic_profile.png";
import * as S from "./HeaderStyles";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <S.HeaderLayout>
      <S.ListContainer>
        <S.LogoWrapper>
          <Image src={Logo} width={81} height={20} alt="판다마켓 로고" className="mobile-logo" />
          <Image src={LargerSizeLogo} width={153} height={51} alt="판다마켓 로고" className="desktop-logo" />
        </S.LogoWrapper>
        <S.Nav>
          <S.NavItem>
            <S.NavLink href="/boards" $isActive={pathname === "/boards"}>
              자유게시판
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/fleamarket" $isActive={pathname === "/fleamarket"}>
              중고마켓
            </S.NavLink>
          </S.NavItem>
        </S.Nav>
      </S.ListContainer>
      <Image src={Profile} width={40} height={40} alt="프로필" />
    </S.HeaderLayout>
  );
}
