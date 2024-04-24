import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <HeaderContainer>
      <MenuContainer>
        <div onClick={() => handleNavigate("/")}>
          <img
            src="/images/home/pandamarket.png"
            alt="판다마켓 홈"
            width="153"
          />
        </div>
        <FreeBoard>자유게시판</FreeBoard>
        <UsedMarket
          active={location.pathname === "/additem"}
          onClick={() => handleNavigate("/items")}
        >
          중고마켓
        </UsedMarket>
      </MenuContainer>
      <GoLogin onClick={() => handleNavigate("/")}>로그인</GoLogin>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  font-family: Pretendard;
  position: sticky;
  top: 0px;
  max-width: 1920px;
  height: 70px;
  display: flex;
  z-index: 9999;
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
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  opacity: 1;
`;

const FreeBoard = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  width: 100px;
  color: #4b5563;
  cursor: pointer;
`;

const UsedMarket = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: center;
  color: ${(props) => (props.active ? "#3692ff" : "#4b5563")};
  cursor: pointer;
`;

MenuContainer.defaultProps = {
  gap: "0px",
};

export default Header;
