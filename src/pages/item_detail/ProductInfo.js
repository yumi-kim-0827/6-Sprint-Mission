import React, { useState, useEffect } from "react";
import {
  ProductInfoSection,
  ProductImageSection,
  ProductDetailSection,
  DetailHeader,
  DetailContent,
  DetailHead,
  DetailTagSection,
  DetailTag,
  DetailLikes,
} from "./productionInfo_style";
import { useParams } from "react-router-dom";
import { useProductLoading } from "../../hooks/loading";
import LoadingMessage from "../../component/LoadingMessage";
import ic_kebab from "../../image/ic_kebab.svg";
import ic_Likes from "../../image/ic_heart.svg";

const ProductInfo = () => {
  const { productId } = useParams();
  const [isLoading, loadingError, handleLoad] = useProductLoading();
  const [productInfo, setProductInfo] = useState({});
  const {
    name = "",
    price = 0,
    images = "",
    description = "",
    tags = [],
    favoriteCount = 0,
  } = productInfo; //이렇게 코드를 써도 되는지 궁금합니다.
  const loadingMessage = isLoading || loadingError;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleProductInfoLoad = async () => {
    const result = await handleLoad({ productId: productId });
    console.log(result);
    setProductInfo(result);
  };

  useEffect(() => {
    handleProductInfoLoad();
  }, []);

  return (
    <ProductInfoSection>
      {loadingMessage ? (
        <LoadingMessage isLoading={isLoading} loadingError={loadingError} />
      ) : (
        <>
          <ProductImageSection>
            <img src={images} alt="상품사진" />
          </ProductImageSection>
          <ProductDetailSection>
            <DetailHeader>
              <div>
                <h2>{name}</h2>
                <img src={ic_kebab} alt="캡바" />
              </div>
              <h1>{numberWithCommas(price)}원</h1>
            </DetailHeader>
            <DetailContent>
              <DetailHead>상품 소개</DetailHead>
              <p>{description}</p>
            </DetailContent>
            <DetailContent>
              <DetailHead>상품 태그</DetailHead>
              <DetailTagSection>
                {tags.map((tag) => (
                  <DetailTag>#{tag}</DetailTag>
                ))}
              </DetailTagSection>
            </DetailContent>
            <DetailLikes>
              <div>
                <img src={ic_Likes} alt="좋아요 이모티콘" />
                <span>{favoriteCount}</span>
              </div>
            </DetailLikes>
          </ProductDetailSection>
        </>
      )}
    </ProductInfoSection>
  );
};

export default ProductInfo;
