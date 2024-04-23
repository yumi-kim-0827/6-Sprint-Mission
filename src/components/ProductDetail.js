import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Api/getProductId";
import ProductDetailStyle from "../css/ProductDetailStyle";
import KebabIcon from "../assets/images/ic_kebab.png";
import styled from "styled-components";
const {
  ProductDetailContainer,
  ProductImageContainer,
  ProductImage,
  ProductInfoContainer,
  TagTitle,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  LikeCount,
  TagText,
  TagItem,
  TagList,
  AskQuestion,
  ProductQuestionContainer,
  InputText,
  SubmitButton,
} = ProductDetailStyle;

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error("상품 정보를 불러오는 데 실패했습니다:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>로딩 중...입니다</div>;
  }
  const { name, description, price, images, favoriteCount, tags } = product;

  return (
    <>
      <ProductDetailContainer>
        <ProductImageContainer>
          <ProductImage src={images[0]} alt={name} />
        </ProductImageContainer>
        <ProductInfoContainer>
          <ProductTitle>
            {name} 팔아요
            <Logo src={KebabIcon} />
          </ProductTitle>
          <ProductPrice>{price.toLocaleString()}원</ProductPrice>
          <TagTitle>상품소개</TagTitle>
          <ProductDescription>{description}</ProductDescription>
          <TagTitle>상품태그</TagTitle>
          <TagList>
            {tags.map((tag) => (
              <TagItem key={`tag-${tag}`}>
                <TagText>#{tag}</TagText>
              </TagItem>
            ))}
          </TagList>
          <LikeCount>
            {favoriteCount !== 0 ? "❤️" : "🤍"} {favoriteCount}
          </LikeCount>
        </ProductInfoContainer>
      </ProductDetailContainer>
      <ProductQuestionContainer>
        <AskQuestion htmlFor="questionId">문의하기</AskQuestion>
        <InputText
          id="questionId"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <SubmitButton>등록</SubmitButton>
      </ProductQuestionContainer>
    </>
  );
};

const Logo = styled.img``;
export default ProductDetail;
