import Image from "next/image";
import Heart from "public/icon/ic_heart.svg";
import styled from "styled-components";

export const PostList = styled.ul`
`;

export const PostItem = styled.li`
  margin-bottom: 24px;
`;

export const PostLayout = styled.div`
  width: 100%;
  height: 136px;
  border-bottom: 1px solid ${({ theme }) => theme.colorPalette.tertiary};
  padding-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
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
  background-color: ${({ theme }) => theme.colorPalette.background};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled(Image)`
  margin-right: 8px;
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
`;

export const HeartIcon = styled(Heart)`
  margin-right: 5px;
`;

export const HeartNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.colorPalette.fontSecondary};
`;

export const CreatedDate = styled.span`
  margin-right: auto;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colorPalette.fontSecondary};
`;
