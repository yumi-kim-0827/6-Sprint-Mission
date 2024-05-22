import React from 'react';
import {
  Wrapper,
  Image,
  ContentWrapper,
  Title,
  Price,
  Division,
  Description,
  ItemTag,
  Favorite,
} from './style';
import { formatNumberToWon } from 'utils/formatNumber';
import Heart from 'assets/icons/Heart';

const ProductDetail = () => {
  const TagList = ['아이패드 미니', '애플', '가성비'];

  return (
    <Wrapper>
      <Image
        alt="상품 사진"
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
      />
      <ContentWrapper>
        <Title>아이패드 미니 팔아요</Title>
        <Price>{formatNumberToWon(500000)}</Price>
        <Division />
        <Description>
          <span>상품 소개</span>
          <p>
            액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면 전혀
            신경쓰이지않을정도입니다. 박스 보관중입니다. 메모용과
            넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
            잘 안써서 싸게넘깁니다! 택배거래안합니다.
          </p>
        </Description>
        <ItemTag>
          <span>상품 태그</span>
          <div>
            {TagList.map((item) => {
              return <span key={item}>#{item}</span>;
            })}
          </div>
        </ItemTag>
        <Favorite>
          <Heart stroke="#6b7280" width={32} height={32} />
          123
        </Favorite>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductDetail;
