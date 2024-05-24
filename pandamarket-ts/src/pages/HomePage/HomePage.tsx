import React from "react";
import Footer from "../../components/Layout/Footer/Footer";
import Icon from "../../components/UI/Icon";
import { ReactComponent as home01 } from "../../assets/images/image/Img_home_01.svg";
import { ReactComponent as home02 } from "../../assets/images/image/Img_home_02.svg";
import { ReactComponent as home03 } from "../../assets/images/image/Img_home_03.svg";
import styled from "styled-components";
import bannerTop from "../../assets/images/image/Img_home_top.svg";
import bannerBottom from "../../assets/images/image/Img_home_bottom.svg";
import { NavLink } from "react-router-dom";

const BannerTop = styled.div`
  background-image: url(${bannerTop});
  background-color: #cfe5ff;
  background-repeat: no-repeat;
  background-size: 55%;
  background-position: 80% bottom;
  height: 540px;
`;

const BannerBottom = styled(BannerTop)`
  background-image: url(${bannerBottom});
  background-size: 50%;
  background-position: 70% bottom;
`;

const Main = styled.div`
  margin-top: 138px;
  margin-bottom: 227px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 276px;
`;

const Button = styled.button`
  width: 335px;
  height: 60px;
  border-radius: 45.5px;
  color: #ffffff;
  background-color: var(--blue);
  font-size: 20px;
  font-weight: 700;
`;

const Item = styled.div`
  display: flex;
  gap: 64px;
`;

const BannerText = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
`;

const BannerTopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 183px 0 0;
`;
function HomePage() {
  return (
    <div>
      <BannerTop>
        <BannerTopContent>
          <BannerText>
            일상의 모든 물건을
            <br /> 거래해보세요
          </BannerText>
          <NavLink to="/items">
            <Button>구경하러가기</Button>
          </NavLink>
        </BannerTopContent>
      </BannerTop>
      <Main>
        <Item>
          <Icon
            iconComponent={home01}
            width={588}
            height={444}
            outlineColor="none"
          />
        </Item>
        <Item>
          <Icon
            iconComponent={home02}
            width={588}
            height={444}
            outlineColor="none"
          />
        </Item>
        <Item>
          <Icon
            iconComponent={home03}
            width={588}
            height={444}
            outlineColor="none"
          />
        </Item>
      </Main>
      <BannerBottom>
        <BannerTopContent>
          <BannerText>
            믿을 수 있는 <br /> 판다마켓 중고 거래
          </BannerText>
        </BannerTopContent>
      </BannerBottom>
      <Footer />
    </div>
  );
}

export default HomePage;
