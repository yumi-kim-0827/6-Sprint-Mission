import React from "react";
import styled from "styled-components";

import MultiLineText from "./MultiLineText";

const HomePageSectionDescription = ({ badgeText, title, content }) => {
  return (
    <StyledDiv>
      {badgeText && (
        <SectionBadge className="section-inner__badge">
          {badgeText}
        </SectionBadge>
      )}
      <SectionTitle className="section__title" isWrap="all">
        {title}
      </SectionTitle>
      <SectionContent className="section__content" isWrap>
        {content}
      </SectionContent>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionBadge = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-blue);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const SectionTitle = styled(MultiLineText)`
  margin-top: 8px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33.6px;
  letter-spacing: 0.2;
  color: var(--color-gray-700);

  &.text-wrap {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
    line-height: 44.8px;
  }

  @media screen and (min-width: 1200px) {
      &.text-nowrap {
        display: none;
      }
      &.text-wrap {
        display: block;
        margin-top: 12px;
        margin-bottom: 24px;
        font-weight: 700;
        font-size: 40px;
        line-height: 56px;
      }
  
`;

const SectionContent = styled(MultiLineText)`
  margin-bottom: 64px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.8;
  color: var(--color-gray-700);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21.6px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export default HomePageSectionDescription;
