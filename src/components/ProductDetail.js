import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Api/getProductId";
import ProductDetailStyle from "../css/ProductDetailStyle";
import KebabIcon from "../assets/images/ic_kebab.png";
import styled from "styled-components";
import InputComments from "./InputComment";
import CommentList from "./CommentList";
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
      <Divider />
      <InputComments />
      <CommentList />
    </>
  );
};

const Logo = styled.img``;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0;
`;
export default ProductDetail;
