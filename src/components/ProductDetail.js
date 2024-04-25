import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProduct, fetchProductComments, addProductComment } from "../api";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    setIsSubmitting(true);
    try {
      const commentData = {
        image: "작성자이미지URL",
        nickname: "작성자닉네임",
        content: newComment,
        description: "상품 설명",
        updateAt: new Date().toISOString(),
      };
      await addProductComment(productId, commentData);
      setComments([...comments, commentData]);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <div>
        {product.images.map((image) => (
          <img key={image} src={image} alt="Product" />
        ))}
      </div>
      <h2>{product.name}</h2>
      <p>{product.price}원</p>
      <h3>상품 소개</h3>
      <p>Description: {product.description}</p>
      <div>
        <h3>상품 태그</h3>
        <ul>
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <p>🤍{product.favoriteCount}</p>
      <hr />
      <div>
        <h3>문의하기</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></textarea>
        <button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "등록중..." : "등록"}
        </button>
      </div>
      <div>
        <h3>상품 코멘트</h3>
        {comments.map((comment) => (
          <div key={comment}>
            <img src={comment.writer.image} alt={comment.writer.nickname} />
            <p>{comment.writer.nickname}</p>
            <p>{comment.content}</p>
            <p>{comment.createdAt}</p>
          </div>
        ))}
      </div>
      <hr />
      <ListBackButton to="/items">목록으로 돌아가기</ListBackButton>
    </div>
  );
};

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
