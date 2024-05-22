import styled from "styled-components";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";

export const BestProductsContainer = styled.div`
  margin-top: 24px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: var(--dark-gray800);
  }
`;

export const BestProductsCards = styled.div`
  display: grid;
  gap: 24px;
  position: relative;
  grid-template-columns: 1fr;

  ${onTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${onPc} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const NoItems = styled.h1`
  min-height: ${({ height }) => height}px;
  color: var(--cool-gray800);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllProductsContainer = styled.div`
  margin-top: 24px;

  ${onTabletAndPc} {
    margin-top: 40px;
  }
`;

export const AllProductsHeader = styled.div`
  display: grid;
  margin-bottom: 16px;
  grid-template-columns: 1fr calc(133px - 42px) 42px;
  grid-template-rows: repeat(2, auto);
  row-gap: 8px;

  ${onTabletAndPc} {
    margin-bottom: 24px;
    grid-template-columns: 1fr 1fr max-content max-content;
    grid-template-rows: 1fr;
    column-gap: 12px;
  }
`;

export const AllProductsTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: var(--dark-gray800);
  align-self: center;

  ${onTabletAndPc} {
    align-self: center;
    margin-bottom: 0;
    grid-column: 1;
  }
`;

export const AddItemButtonBox = styled.div`
  grid-column: 2 / span 2;

  ${onTabletAndPc} {
    grid-column: 3;
  }
`;

export const SearchInputBox = styled.div`
  margin-right: 8px;
  grid-column: 1 / span 2;
  grid-row: 2;

  ${onTabletAndPc} {
    margin-right: 0;
    grid-column: 2;
    grid-row: 1;
  }
`;

export const SelectInputBox = styled.div`
  ${onTabletAndPc} {
    grid-column: 4;
  }
`;

export const AllProductsCards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 8px;
  row-gap: 32px;

  ${onTablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 40px;
  }

  ${onPc} {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 24px;
  }
`;
