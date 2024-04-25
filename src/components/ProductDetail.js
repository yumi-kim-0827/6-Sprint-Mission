import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProduct, fetchProductComments } from "../api";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productData = await fetchProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    fetchProductDetail();
  }, [productId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await fetchProductComments(productId, 10);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching product comments:", error);
      }
    };
    fetchComments();
  }, [productId]);

  if (!product) {
    return <div>로딩중...</div>;
  }

  return (
    <ProductDetailContainer>
      <ProductDetailInfoContainer>
        <ProductDetailImageContainer>
          {product.images.map((image) => (
            <ProductDetailImage key={image} src={image} alt="Product" />
          ))}
        </ProductDetailImageContainer>
        <ProductDetailContentContainer>
          <ProductDetailName>{product.name}</ProductDetailName>
          <ProductDetailPrice>
            {product.price.toLocaleString()}원
          </ProductDetailPrice>
          <HorizontalLine />
          <ProductDetailTitle>상품 소개</ProductDetailTitle>
          <ProductDetailText>{product.description}</ProductDetailText>
          <ProductDetailTagBox>
            <ProductDetailTagTitle>상품 태그</ProductDetailTagTitle>
            <TagContainer>
              {product.tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </TagContainer>
          </ProductDetailTagBox>
          <ProductDetailFavorite>
            🤍 {product.favoriteCount}
          </ProductDetailFavorite>
        </ProductDetailContentContainer>
      </ProductDetailInfoContainer>
      <HorizontalLineBottom />
      <ProductDetailCommentBox>
        <ProductDetailNewComment>문의하기</ProductDetailNewComment>
        <StyledTextarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></StyledTextarea>
        <button>등록</button>
        {comments.map((comment) => (
          <ProductDetailComment key={comment}>
            <ProductDetailCommentWriter
              src={comment.writer.image}
              alt={comment.writer.nickname}
            />
            <ProductCommentNickname>
              {comment.writer.nickname}
            </ProductCommentNickname>
            <ProductCommentContent>{comment.content}</ProductCommentContent>
            <ProductCommentCreatedAt>
              {comment.createdAt}
            </ProductCommentCreatedAt>
          </ProductDetailComment>
        ))}
      </ProductDetailCommentBox>
      <HorizontalLineBottom />
      <ListBackButton to="/items">목록으로 돌아가기</ListBackButton>
    </ProductDetailContainer>
  );
};

const ProductDetailContainer = styled.div`
  font-family: Pretendard;
  font-weight: 600;
`;

const ProductDetailInfoContainer = styled.div`
  display: flex;
`;

const ProductDetailImageContainer = styled.div`
  margin-right: 20px;
`;

const ProductDetailImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 16px;
  margin-top: 20px;
  margin-left: 350px;
`;

const ProductDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetailName = styled.h2`
  font-size: 20px;
`;

const ProductDetailPrice = styled.p`
  font-size: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e6e8ec;
  margin: 10px 0;
`;

const ProductDetailTitle = styled.h3`
  font-size: 14px;
  color: #4b5563;
  margin-top: 5px;
`;

const ProductDetailText = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const ProductDetailTagBox = styled.div`
  align-items: center;
  margin-bottom: 10px;
`;

const ProductDetailTagTitle = styled.p`
  display: block;
  font-size: 14px;
  color: #4b5563;
  margin-top: 25px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #f3f4f6;
  margin-right: 5px;
`;

const ProductDetailFavorite = styled.p`
  display: inline-block;
  border-radius: 20px;
  padding: 5px 10px;
  margin-top: auto;
  width: fit-content;
  border: 1px solid #e5e7eb;
`;

const HorizontalLineBottom = styled.hr`
  width: calc(100% - 400px);
  border: none;
  border-top: 1px solid #e6e8ec;
  margin: 10px 200px;
`;

const ProductDetailCommentBox = styled.div`
  flex: 1;
`;

const ProductDetailNewComment = styled.div``;

const StyledTextarea = styled.textarea``;

const ProductDetailComment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductDetailCommentWriter = styled.div``;

const ProductCommentNickname = styled.p``;

const ProductCommentContent = styled.p``;

const ProductCommentCreatedAt = styled.p``;

const ListBackButton = styled(Link)`
  width: 130px;
  height: 19px;
  padding: 12px 20px;
  gap: 10px;
  border-radius: 12px;
  background-color: #3692ff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;

export default ProductDetail;
