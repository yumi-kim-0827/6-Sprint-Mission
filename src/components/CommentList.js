import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getComments } from "../Api/getComments";
import NoneImg from "../assets/images/Img_inquiry_empty.png";
import BackIcon from "../assets/images/ic_back.png";
import styled from "styled-components";

const CommentList = () => {
  const { productId } = useParams();
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/items");
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments(productId);
        setComments(data);
        console.log(data);
      } catch (error) {
        console.error("댓글을 불러오는 데 실패했습니다:", error);
      }
    };
    fetchComments();
  }, [productId]);

  return (
    <>
      {!comments || comments.length === 0 ? (
        <NoneListContainer>
          <img src={NoneImg} alt="로딩이미지" width="200" />
          <NoneCommentText>아직 문의가 없습니다</NoneCommentText>
          <ReturnButton onClick={handleReturnClick}>
            목록으로 돌아가기
            <BackIconImg src={BackIcon} alt="돌아가기 아이콘" />
          </ReturnButton>
        </NoneListContainer>
      ) : (
        comments.map((comment, id) => (
          <div key={id}>
            <div>{comment.nickname}</div>
            <div>{comment.description}</div>
            <img src={comment.image} alt="작성자 이미지" />
            <div>{comment.content}</div>
            <div>{comment.updatedAt}</div>
          </div>
        ))
      )}
    </>
  );
};

const NoneListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 140px;
`;

const NoneCommentText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #9ca3af;
`;
const ReturnButton = styled.button`
  display: flex;
  width: 240px;
  height: 48px;
  border-radius: 40px;
  background: #3692ff;
  border: none;
  color: #fff;
  margin-top: 20px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const BackIconImg = styled.img`
  width: 24px;
  height: 24px;
`;
export default CommentList;
