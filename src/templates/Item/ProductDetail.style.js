import styled from "styled-components";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";

export const ProductDetailInfoContainer = styled.div`
  position: relative;
  margin-top: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray200);
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 16px;

  ${onTablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  ${onPc} {
    margin-top: 24px;
    padding-bottom: 32px;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: auto;
    gap: 24px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
`;

export const InfoTop = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: 1fr 1.5fr;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray200);

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--cool-gray800);

    ${onTablet} {
      font-size: 20px;
    }

    ${onPc} {
      font-size: 24px;
    }
  }

  .kebab-icon {
    cursor: pointer;
  }

  .price {
    font-weight: 600;
    font-size: 24px;

    ${onTablet} {
      margin-top: 12px;
      font-size: 32px;
    }

    ${onPc} {
      margin-top: 16px;
      font-size: 40px;
    }
  }
`;

export const InfoBottom = styled.div`
  margin-top: 16px;

  h2 {
    font-weight: 500;
    font-size: 14px;
    color: var(--cool-gray600);
  }

  p {
    padding: 8px 0 23px;
    font-weight: 400;
    color: var(--cool-gray800);
  }

  .like-btn {
    margin-top: 24px;
  }

  ${onTabletAndPc} {
    margin-top: 0;
    position: absolute;
    bottom: 0;
  }
`;

export const InquiryTemplateContainer = styled.div`
  position: relative;
  margin-top: 16px;

  ${onTabletAndPc} {
    margin-top: 24px;
  }

  .title {
    font-weight: 600;
    color: var(--dark-gray800);
    margin-bottom: 16px;
  }
`;

export const SubmitBtnBox = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const CommentListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;

  ${onTabletAndPc} {
    margin-top: 24px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
  }

  span {
    color: var(--light-gray);
    font-weight: 400;
    line-height: 24px;
  }
`;

export const BackButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
