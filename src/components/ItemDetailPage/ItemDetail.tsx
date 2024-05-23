import styled from "styled-components";
import heartIcon from "../assets/heart-icon.svg";
import kebabIcon from "../assets/icon-kebab.svg";
import Item from "constants/Item";

interface Props {
  item: Item;
}

export default function ItemDetail({ item }: Props) {
  return (
    <>
      <ItemImg src={item.images} alt="상품 사진" />
      <DescriptionContainer>
        <TitleContainer>
          <h1>{item.name}</h1>
          {/* <h2>{item.price.toLocaleString()}원</h2> 
        TypeError: Cannot read properties of undefined (reading 'toLocaleString') */}
          <KebabIcon src={kebabIcon} />
          <h2>{item.price ? `${item.price.toLocaleString()}원` : ""}</h2>
        </TitleContainer>
        <ContentContainer>
          <ItemDescriptionContainer>
            <h3>상품 소개</h3>
            <ContentDescription>{item.description}</ContentDescription>
            <h3>상품 태그</h3>
            <TagContainer>
              {item.tags?.map((tag, index) => {
                return <Tag key={index}>#{tag}</Tag>;
              })}
            </TagContainer>
          </ItemDescriptionContainer>
          <HeartContainer>
            <img src={heartIcon} />
            <p>{item.favoriteCount}</p>
          </HeartContainer>
        </ContentContainer>
      </DescriptionContainer>
    </>
  );
}
const ItemImg = styled.img`
  border-radius: 12px;
  width: 486px;
  height: 486px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 340px;
    height: 340px;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 343px;
    height: 343px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  h1 {
    font-size: 24px;
    font-weight: 600;

    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 20px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 16px;
    }
  }

  h2 {
    font-size: 40px;
    font-weight: 600;

    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 32px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 24px;
    }
  }
`;

const TitleContainer = styled(DescriptionContainer)`
  gap: 16px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

const ContentContainer = styled(DescriptionContainer)`
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContentDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
  line-height: 22px;
`;

const Tag = styled(ContentDescription)`
  margin-bottom: 0px;
  background-color: #f3f4f6;
  border-radius: 26px;
  padding: 6px 16px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  padding: 4px 12px;
  gap: 10px;
  flex-grow: 0;
  border-radius: 35px;
  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 24px;
  }
`;

const ItemDescriptionContainer = styled(DescriptionContainer)`
  h3 {
    color: #4b5563;
  }
`;

export const KebabIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
`;
