import Image from "next/image";
import Heart from "public/icon/ic_heart.svg";
import styled from "styled-components";

export const CardList = styled.ul`
  display: inline-flex;
  gap: 16px;
`;

export const CardItem = styled.li`
  margin-bottom: 24px;
`;

export const CardLayout = styled.div`
  position: relative;
  width: 343px;
  height: 167px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colorPalette.secondary};

  @media ${({ theme }) => theme.windowSize.tablet} {
    width: 349px;
    height: 167px;
  }

  @media ${({ theme }) => theme.windowSize.desktop} {
    width: 384px;
    height: 169px;
  }
`;

export const BadgeImage = styled(Image)`
  position: absolute;
  margin-left: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 46px 24px 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  line-height: 2.1rem;
`;

export const ImageContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colorPalette.tertiary};
  padding: 12px;
  color: ${({ theme }) => theme.colorPalette.background};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NickName = styled.span`
  margin-right: 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colorPalette.fontSecondary};
`;

export const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const HeartIcon = styled(Heart)`
  margin-right: 5px;
`;

export const HeartNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colorPalette.fontSecondary};
`;

export const CreatedDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colorPalette.fontSecondary};
`;
