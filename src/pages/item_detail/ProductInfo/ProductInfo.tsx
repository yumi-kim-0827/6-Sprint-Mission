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
import { useProductLoading } from "hooks/useProductLoading";
import LoadingMessage from "component/LoadingMessage";
import ic_kebab from "image/ic_kebab.svg";
import ic_Likes from "image/ic_heart.svg";

interface Product {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
}
const emptyProduct: Product = {
  createdAt: "",
  favoriteCount: 0,
  ownerId: 0,
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
  id: 0,
  isFavorite: false,
};

const ProductInfo = () => {
  const { productId } = useParams();
  const [isLoading, loadingError, handleLoad] = useProductLoading();
  const [productInfo, setProductInfo] = useState<Product>(emptyProduct);
  const { name, price, images, description, tags, favoriteCount } = productInfo;
  const loadingMessage = isLoading || loadingError;

  const numberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleProductInfoLoad = async () => {
    const result = await handleLoad({ productId: Number(productId) });
    if (result) {
      setProductInfo(result);
    }
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
            <img src={images[0]} alt="상품사진" />
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
                  <DetailTag key={tag}>#{tag}</DetailTag>
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
