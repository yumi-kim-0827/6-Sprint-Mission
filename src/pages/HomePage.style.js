import styled from "styled-components";
import BaseButton from "../components/BaseButton";
import WebpLoader from "../components/WebpLoader";
import MultiLineText from "../components/MultiLineText";
import HomePageSectionDescription from "../components/HomePageSectionDescription";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 70px;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 540px;
  background-color: #cfe5ff;
  overflow: hidden;

  > div:first-of-type {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    max-width: 1200px;
    width: 100vw;
    height: 540px;
  }

  @media screen and (min-width: 768px) {
    height: 771px;

    > div:first-of-type {
      gap: 24px;
      height: 771px;
    }

    &:last-of-type,
    &:last-of-type > div:first-of-type {
      height: 927px;
    }

    &:last-of-type p {
      margin-top: 201px;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 540px;

    > div:first-of-type {
      justify-content: center;
      align-items: flex-start;
      height: 540px;
      padding: 0 24px;
    }

    &:last-of-type,
    &:last-of-type > div:first-of-type {
      height: 540px;
    }

    &:last-of-type p {
      margin-top: 0;
    }
  }
`;

export const BannerImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  height: 281px;

  @media screen and (min-width: 768px) {
    width: 996px;
    height: auto;
  }
  @media screen and (min-width: 1200px) {
    left: 0;
    transform: translate(33%);
  }
`;
export const BannerDescription = styled(MultiLineText)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  max-width: 1200px;
  width: 100%;
  margin-top: 48px;
  font-size: 32px;
  font-weight: 700;
  line-height: 44.8px;
  text-align: center;
  z-index: 1;

  &.text-nowrap {
    display: none;
  }

  @media screen and (min-width: 768px) {
    :first-of-type &.text-nowrap {
      display: block;
    }
    :first-of-type &.text-wrap {
      display: none;
    }

    margin-top: 84px;
    font-size: 40px;
    line-height: 56px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    :first-of-type .text-nowrap {
      display: none;
    }
    :last-of-type.text-wrap {
      display: block;
    }
  }
`;

export const BannerButton = styled(BaseButton)`
  width: 154px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    width: 335px;
    font-size: 20px;
  }
`;

export const SectionContainer = styled.div`
  max-width: 1200px;
  width: 100vw;
  height: auto;
  padding: 16px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  min-height: 720px;
  height: auto;

  &:nth-child(2) {
    text-align: end;
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;

export const SectionDescription = styled(HomePageSectionDescription)``;

export const SectionImg = styled(WebpLoader)`
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    flex-shrink: 0;
    width: 588px;
    height: 444px;
  }
`;
