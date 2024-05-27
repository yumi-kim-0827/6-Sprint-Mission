import React from 'react';
import styled from 'styled-components';
import ic_kebab from '../assets/ic_kebab.png';
import big_grayHeart from '../assets/big_grayHeart.png';
import { GetItemResponse } from 'api/getItemsId';

type TitleStyle = {
  fontSize: string;
  fontWeight: string;
  ipadSize: string;
  deskTopSize: string;
};

export default function ItemDetailCard({
  name,
  description,
  images,
  price,
  tags,
  favoriteCount,
}: Partial<GetItemResponse>) {
  const formattedPrice = price?.toLocaleString();
  return (
    <Container>
      <ImgContainer>
        <img src={images} alt={name} />
      </ImgContainer>
      <TextWrap>
        <TitleContainer>
          <Title fontSize='16px' fontWeight='600' ipadSize='20px' deskTopSize='24px'>
            {name}
          </Title>
          <Title fontSize='24px' fontWeight='600' ipadSize='32px' deskTopSize='40px'>
            {formattedPrice}원
          </Title>
          <img src={ic_kebab} alt='드롭다운 메뉴바' />
          <HorizontalLine></HorizontalLine>
        </TitleContainer>

        <DescriptionContainer>
          <Title fontSize='14px' fontWeight='500'>
            상품소개
          </Title>
          <p>{description}</p>
        </DescriptionContainer>

        <TagWrap>
          <Title fontSize='14px' fontWeight='500'>
            상품 태그
          </Title>
          <Tags>
            {tags?.map(tag => (
              <Tag>{`#${tag}`}</Tag>
            ))}
          </Tags>
        </TagWrap>
        <HeartWrap>
          <img src={big_grayHeart} alt='좋아요 하트' />
          <div>{favoriteCount}</div>
        </HeartWrap>
      </TextWrap>
    </Container>
  );
}

const Container = styled.div`
  color: #1f2937;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 24px;
    height: 418px;
  }

  @media (min-width: 1199px) {
    height: 486px;
  }
`;

const ImgContainer = styled.div`
  width: 343px;
  height: 343px;
  margin: 16px 0;

  @media (min-width: 768px) {
    min-width: 340px;
    height: 340px;
    margin: 0;
  }

  @media (min-width: 1199px) {
    width: 486px;
    height: 486px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const TextWrap = styled.div`
  width: 340px;
  position: relative;

  @media (min-width: 768px) {
    margin-left: 16px;
    top: 3px;
  }

  @media (min-width: 1199px) {
    width: 690px;
    margin-left: 24px;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & img {
    position: absolute;
    top: -2px;
    right: 0;
    width: 24px;
  }

  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1199px) {
    gap: 16px;
  }
`;

const Title = styled.p<Partial<TitleStyle>>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: 19px;

  @media (min-width: 768px) {
    font-size: ${props => props.ipadSize};
  }

  @media (min-width: 1199px) {
    font-size: ${props => props.deskTopSize};
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 8px 0 16px 0;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1199px) {
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  gap: 8px;
`;

const TagWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 11px;
  }
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  background-color: #f3f4f6;
  border-radius: 26px;
  padding: 6px 16px;
`;

const HeartWrap = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
  padding: 4px 12px;
  margin: 24px 0;
  border: 1px solid #e5e7eb;
  border-radius: 35px;
  font-weight: 500;
  font-color: #6b7280;

  & img {
    width: 20px;
  }

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
  }
  @media (min-width: 1199px) {
    margin: 0;
  }
`;
