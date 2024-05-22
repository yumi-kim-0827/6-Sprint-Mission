/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
import { getProductDetail } from 'api/getProductDetail';
import useLoading from 'hooks/useLoading';

const ProductDetail = ({ productId }) => {
  const { isLoading, error, handleLoad } = useLoading(getProductDetail);
  const [item, setItem] = useState(null);

  const handleProductLoad = async () => {
    const product = await handleLoad({ productId: productId });
    if (product) {
      setItem(product);
    }
  };

  useEffect(() => {
    handleProductLoad();
  }, []);

  if (isLoading || item === null) {
    return <h1>로딩중</h1>;
  } else if (error) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <Wrapper>
        <Image alt={item.name} src={item.images[0]} />
        <ContentWrapper>
          <Title>{item.name}</Title>
          <Price>{formatNumberToWon(item.price)}</Price>
          <Division />
          <Description>
            <span>상품 소개</span>
            <p>{item.description}</p>
          </Description>
          <ItemTag>
            <span>상품 태그</span>
            <div>
              {item.tags.map((item) => {
                return <span key={item}>#{item}</span>;
              })}
            </div>
          </ItemTag>
          <Favorite>
            <Heart stroke="#6b7280" width={32} height={32} />
            <span>{item.favoriteCount}</span>
          </Favorite>
        </ContentWrapper>
      </Wrapper>
    );
  }
};

export default ProductDetail;
