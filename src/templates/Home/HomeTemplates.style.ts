import styled from "styled-components";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";
import COLORS from "styles/palette";
import zIndex from "styles/zIndex";

// HomeTopImgComponent

export const HomeTopImgContainer = styled.div`
  height: 540px;
  padding: 48px 70px 0;
  position: relative;
  margin: 0 auto;
  background-color: ${COLORS.LIGHT_BLUE_200};

  ${onTablet} {
    height: 771px;
    padding: 84px 116px 0;
  }

  ${onPc} {
    height: 540px;
    display: flex;
    align-items: center;
    padding: 0 200px;
  }
`;

export const HomeTopTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: ${COLORS.COOL_GRAY_700};
  text-align: center;
  margin-bottom: 18px;
  z-index: ${zIndex.floating};
  position: relative;

  span {
    display: block;
  }

  ${onTablet} {
    min-width: fit-content;
    margin-bottom: 24px;

    span {
      display: inline;
    }
  }

  ${onPc} {
    font-size: 40px;
    line-height: 56px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  z-index: ${zIndex.floating};
  position: relative;

  span {
    font-size: 14px;
  }

  ${onTabletAndPc} {
    span {
      font-size: 20px;
    }
  }

  ${onPc} {
    justify-content: flex-start;
  }

  button {
    padding: 16px 20px;

    ${onTablet} {
      padding: 24px 100px;
    }

    ${onPc} {
      padding: 28px 120px;
    }
  }
`;

export const HomeTopImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  z-index: ${zIndex.base};
  width: 100%;
  height: 290px;
  overflow: hidden;
  object-fit: cover;

  ${onTablet} {
    height: 447px;
  }

  ${onPc} {
    right: 30px;
    transform: none;
    width: max-content;
    height: 447px;
  }
`;

// HomeBottomImgComponent

export const HomeBottomImgContainer = styled.div`
  height: 540px;
  padding-top: 100px;
  position: relative;
  margin: 0 auto;
  background-color: ${COLORS.LIGHT_BLUE_200};

  ${onTablet} {
    height: 927px;
    padding-top: 220px;
    text-align: center;
  }

  ${onPc} {
    height: 540px;
    display: flex;
    align-items: center;
    padding: 0 200px;
  }
`;

export const HomeBottomTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: ${COLORS.COOL_GRAY_700};
  text-align: center;
  z-index: ${zIndex.floating};
  position: relative;

  ${onTabletAndPc} {
    font-size: 40px;
    line-height: 56px;
  }

  ${onPc} {
    text-align: left;
  }
`;

export const HomeBottomImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 100%;
  height: 300px;
  overflow: hidden;
  object-fit: cover;

  ${onTablet} {
    height: 540px;
  }

  ${onPc} {
    right: 30px;
    transform: none;
    height: auto;
    width: max-content;
  }
`;

// Section

export const SectionContainer = styled.div`
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${onTablet} {
    margin-top: 64px;
  }

  ${onPc} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 128px;
    align-items: center;
    gap: 64px;
    order: -1;
  }
`;

export const SectionImg = styled.img`
  width: 100%;
`;

export const SectionScript = styled.div<{ direction?: "right" | "left" }>`
  margin-top: 20px;
  width: 100%;
  text-align: ${({ direction }) => (direction === "right" ? "right" : "none")};

  ${onPc} {
    order: ${({ direction }) => (direction === "right" ? -1 : 1)};
  }

  .badge {
    color: ${COLORS.BLUE};
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }

  .title {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 700;

    ${onTablet} {
      margin-top: 12px;
      font-size: 32px;
    }

    ${onPc} {
      margin-top: 12px;
      font-size: 40px;
      line-height: 48px;

      span {
        display: block;
      }
    }
  }

  .description {
    margin-top: 20px;
    font-weight: 500;
    font-size: 18px;

    ${onPc} {
      margin-top: 24px;
      font-size: 24px;
    }
  }
`;

// Footer

export const FooterContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: ${COLORS.DARK_GRAY_800};
  padding: 32px;
  height: 160px;

  ${onTablet} {
    padding: 32px 100px 0;
  }

  ${onPc} {
    padding: 32px 200px 0;
  }
`;

export const FooterCopyright = styled.span`
  position: absolute;
  bottom: 32px;
  left: 32px;
  color: ${COLORS.LIGHT_GRAY};
  cursor: pointer;

  ${onTabletAndPc} {
    position: relative;
    bottom: 0;
    left: 0;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  gap: 30px;

  a {
    cursor: pointer;
    color: ${COLORS.GRAY_200};
  }
`;

export const FooterSNS = styled.div`
  color: white;
  display: flex;
  gap: 12px;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
