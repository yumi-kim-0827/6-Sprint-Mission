import { getProductData } from "apis/get";
import { ImageBlock } from "components/Input/FormInput/ImageInput/ImageInput.style";
import Loading from "components/Loading";
import { TagList } from "components/Tag";
import useAsync from "hooks/useAsync";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import styles from "./market.module.scss";
import kebab from "assets/icon/ic_kebab.svg";
import { addCommas } from "utils/commas";
import { Tag } from "components/Tag";
import { Button } from "components/Button";

const INTIAL_DATA = {
  favoriteCount: 0,
  images: [],
  tags: [],
  name: "",
  description: "",
  price: 0,
};

export default function ProductDetail() {
  const params = useParams();
  const [productData, setProductData] = useState(INTIAL_DATA);
  const [isLoading, getProductDataAsync] = useAsync(getProductData);

  useEffect(() => {
    (async () => {
      const data = await getProductDataAsync(params.productId);
      setProductData(data);
    })();
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={styles.productDetail}>
          <div className={styles.productDetailGrid}>
            <StyledImage src={productData.images[0]} alt="product-img" />

            <div className={styles.productDetail__notImage}>
              <div className={styles.top}>
                <h1>{productData.name}</h1>
                <img src={kebab} alt="ic-kebab" />
                <span className={styles.price}>
                  {addCommas(productData.price)}원
                </span>
              </div>

              <div className={styles.bottom}>
                <h2>상품 소개</h2>
                <p>{productData.description}</p>
                <h2>상품 태그</h2>
                <TagList>
                  {productData.tags.map((tag) => (
                    <Tag.Product key={tag}>{`#${tag}`}</Tag.Product>
                  ))}
                </TagList>
                <div className={styles.likeBtn}>
                  <Button.Like>{productData.favoriteCount}</Button.Like>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

const StyledImage = styled.img`
  ${ImageBlock};
`;
