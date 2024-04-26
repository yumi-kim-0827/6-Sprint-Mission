import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProduct, fetchProductComments } from "../api";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    const newCommentData = {
      content: newComment,
      writer: {
        image: "/images/home/commentpanda.png",
        nickname: "User",
      },
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, newCommentData]);
    setNewComment("");
  };

  const isFormValid = () => {
    return newComment.trim() !== "";
  };

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
      <ProductDetailNewComment>문의하기</ProductDetailNewComment>
      <ProductDetailCommentBox>
        <StyledTextarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></StyledTextarea>
      </ProductDetailCommentBox>
      <CommentButton onClick={handleCommentSubmit} disabled={!isFormValid()}>
        등록
      </CommentButton>
      <ProductDetailCommentBoxBottom>
        {comments.length === 0 ? (
          <>
            <EmptyPandaImage
              src="/images/home/emptypanda.png"
              alt="Empty Panda"
            />
            <NoCommentsMessage>아직 문의가 없습니다.</NoCommentsMessage>
          </>
        ) : (
          comments.map((comment) => (
            <>
              <ProductDetailComment key={comment}>
                <ProductCommentContent>{comment.content}</ProductCommentContent>
                <ProductDetailCommentWriter
                  src={comment.writer.image}
                  alt={comment.writer.nickname}
                />
                <ProductCommenterInfo>
                  <ProductCommentNickname>
                    {comment.writer.nickname}
                  </ProductCommentNickname>
                  <ProductCommentCreatedAt>
                    {comment.createdAt}
                  </ProductCommentCreatedAt>
                </ProductCommenterInfo>
              </ProductDetailComment>
              <HorizontalLineBottom />
            </>
          ))
        )}
      </ProductDetailCommentBoxBottom>
      <ProductDetailBack>
        <ListBackButton to="/items">목록으로 돌아가기 ↩️</ListBackButton>
      </ProductDetailBack>
    </ProductDetailContainer>
  );
};

const ProductDetailContainer = styled.div`
  font-family: Pretendard;
  font-weight: 600;
`;

const ProductDetailInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  border-top: 2px solid #e6e8ec;
  margin: 10px 200px;xormqk
`;

const ProductDetailCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmptyPandaImage = styled.img`
  width: 200px;
`;

const NoCommentsMessage = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #9ca3af
  margin-top: 10px;
  margin-bottom: 18px;
`;

const ProductDetailNewComment = styled.div`
  margin-top: 15px;
  margin-left: 200px;
`;

const StyledTextarea = styled.textarea`
  width: calc(100% - 430px);
  height: 70px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  resize: none;
  background-color: #f3f4f6;
  font-family: auto;
  margin-top: 15px;
`;

const CommentButton = styled.button`
  margin-top: 15px;
  margin-left: calc(100% - 267px);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  ${({ disabled }) =>
    !disabled &&
    css`
      background-color: #3691ff;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #9ca3af;
      cursor: not-allowed;
    `}
`;

const ProductDetailCommentBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetailComment = styled.div`
  margin-bottom: 10px;
`;

const ProductCommentContent = styled.p`
  margin-top: 20px;
  margin-left: 200px;
`;

const ProductDetailCommentWriter = styled.img`
  width: 40px;
  margin-top: 10px;
  margin-left: 200px;
`;

const ProductCommenterInfo = styled.div`
  margin-top: -60px;
  margin-left: 250px;
`;

const ProductCommentNickname = styled.p`
  font-weight: 400;
  color: #4b5563;
  margin-bottom: 3px;
`;

const ProductCommentCreatedAt = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #9ca3af;
  margin-top: 3px;
`;

const ProductDetailBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListBackButton = styled(Link)`
  margin-top: 30px;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 50px;
  background-color: #3692ff;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;

export default ProductDetail;
