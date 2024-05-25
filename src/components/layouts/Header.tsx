import styled, { css } from "styled-components";
import Logo from "../../assets/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import LogOutIcon from "../../assets/images/ic_profile.png";
import "../../css/style.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("accessToken");

  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const isUsedMarketActive =
    location.pathname === "/items" ||
    location.pathname === "/additem" ||
    /^\/items\/\d+$/.test(location.pathname);

  return (
    <HeaderContainer>
      <MenuContainer>
        <div onClick={() => navigate("/")}>
          <PandaLogo src={Logo} alt="판다마켓 홈" width="135" />
        </div>
        {isLoggedIn && (
          <>
            <FreeBoard>자유게시판</FreeBoard>
            <UsedMarket
              active={isUsedMarketActive}
              onClick={() => navigate("/items")}
            >
              중고마켓
            </UsedMarket>
          </>
        )}
      </MenuContainer>
      {isLoggedIn ? (
        <LogoutIconContainer onClick={handleLogoutClick}>
          <LogoutIconImg src={LogOutIcon} alt="로그아웃" />
        </LogoutIconContainer>
      ) : (
        <GoLogin onClick={handleLoginClick}>로그인</GoLogin>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  background-color: #ffffff;
  border-bottom: 1px solid #dfdfdf;
  @media (max-width: 1023px) {
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 5px;
  }
`;

const GoLogin = styled.a`
  background-color: #3692ff;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 13px 23px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Logout = styled.a`
  background-color: #ff3b30;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 13px 23px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 218px;
  height: 69px;
  gap: 0px;
  opacity: 1;
`;

const LogoutIconContainer = styled.div`
  cursor: pointer;
`;

const LogoutIconImg = styled.img`
  width: 24px;
  height: 24px;
`;

const FreeBoard = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-left: 15px;
  cursor: pointer;
`;

const UsedMarket = styled.div<{ active: boolean }>`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: center;
  padding-left: 15px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: #3692ff;
    `}
`;

const PandaLogo = styled.img`
  cursor: pointer;
`;

export default Header;
