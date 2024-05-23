import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, Product } from "../Api/getProductId";
import ProductDetail from "../components/ProductDetail";
import InputComments from "../components/InputComment";
import CommentList from "../components/CommentList";
import styled from "styled-components";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const data = await getProductById(productId);
          if (data) {
            setProduct(data);
          }
        }
      } catch (error) {
        console.error("상품 정보를 불러오는 데 실패했습니다:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <>
      {product ? (
        <>
          <ProductDetail product={product} />
          <Divider />
          <InputComments />
          <CommentList />
        </>
      ) : (
        <div>로딩 중...입니다</div>
      )}
    </>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0;
`;

export default ProductDetailPage;
