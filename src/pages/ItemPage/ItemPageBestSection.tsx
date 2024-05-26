import styled from "styled-components";
import ItemPageCard from "./ItemPageCard";

interface BestItems {
  bestItems: Item[];
}

const ItemPageBestSection = ({ bestItems }: BestItems) => {
  return (
    <StyledBestItemSection>
      <StyledItemPageTitle>베스트 상품</StyledItemPageTitle>
      <div>
        {bestItems.map((item) => (
          <StyledBestItemCard key={item.id} item={item} />
        ))}
      </div>
    </StyledBestItemSection>
  );
};

const StyledBestItemSection = styled.div`
  margin-top: 16px;

  > div {
    display: flex;
    margin-bottom: 24px;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    > div {
      margin-bottom: 40px;
      gap: 24px;
    }
  }
`;

const StyledItemPageTitle = styled.span`
  grid-area: title;
  margin: auto 0;
  font-weight: 700;
  font-size: 20px;
  color: #111827;
`;

const StyledBestItemCard = styled(ItemPageCard)`
  width: 100%;
`;

export default ItemPageBestSection;
