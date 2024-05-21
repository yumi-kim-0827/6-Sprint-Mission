import styled from "styled-components";
import ItemPageBestSection from "../components/ItemPageBestSection";
import Pagination from "../components/Pagination";
import SortSelectBox from "../components/SortSelectBox";
import BaseButton from "../components/BaseButton";
import SearchInput from "../components/SearchInput";
import ItemPageCard from "../components/ItemPageCard";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 17px 16px;
  margin-top: 70px;
  margin-bottom: 62px;
`;

export const BestItemSection = styled(ItemPageBestSection)``;

export const ItemSection = styled.div`
  > div:last-of-type {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    > div:last-of-type {
      gap: 16px;
    }
  }

  @media screen and (min-width: 1200px) {
    > div:last-of-type {
      gap: 24px;
    }
  }
`;

export const ItemTitleSection = styled.div`
  display: grid;
  grid-template-columns: 1fr calc(132px - 42px - 8px) 42px;
  grid-template-areas:
    "title btn btn"
    "search search sort";
  grid-gap: 8px;

  > span {
    grid-area: title;
    margin: auto 0;
    font-weight: 700;
    font-size: 20px;
    color: #111827;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto auto auto;
    grid-template-areas: "title search btn sort";
    grid-gap: 8px;
  }
`;

export const ItemPageSearchInput = styled(SearchInput)`
  grid-area: search;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 242px;
  }

  @media screen and (min-width: 1200px) {
    width: 325px;
  }
`;

export const ItemPageAddItemBtn = styled(BaseButton)`
  grid-area: btn;
  width: 133px;
  height: 42px;
`;

export const ItemPageSelectBox = styled(SortSelectBox)`
  grid-area: sort;
`;

export const ItemCard = styled(ItemPageCard)`
  width: calc(50% - 4px);

  @media screen and (min-width: 768px) {
    width: calc(33.3% - 12px);
  }
  @media screen and (min-width: 1200px) {
    /* 19.2px = 24(margin-right값) % 5(요소 개수) * 4(gap개수)  */
    width: calc(20% - 19.2px);
  }
`;

export const ItemPagePagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
