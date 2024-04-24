import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getComments } from "../Api/getComments";
import NoneImg from "../assets/images/Img_inquiry_empty.png";
import BackIcon from "../assets/images/ic_back.png";
import styled from "styled-components";
import KebabIcon from "../assets/images/ic_kebab.png";

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
        const data = await getComments(productId, 3);
        setComments(data.list);
        console.log(data);
      } catch (error) {
        console.error("댓글을 불러오는 데 실패했습니다:", error);
      }
    };
    fetchComments();
  }, [productId]);

  function formatTimeSince(dateString) {
    const now = new Date();
    const updatedAt = new Date(dateString);
    const diffInSeconds = Math.floor(
      (now.getTime() - updatedAt.getTime()) / 1000
    );

    if (diffInSeconds < 60) {
      return "방금 전";
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}분 전`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)}일 전`;
    }
  }
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
        <>
          <CommentListContainer>
            {comments.map((comment, id) => (
              <div key={id}>
                <Content>
                  {comment.content}
                  <Logo src={KebabIcon} />
                </Content>
                <ProfileWrapper>
                  <ProfileImg
                    src={comment.writer.image}
                    alt="작성자 이미지"
                    width="40"
                  />
                  <NicknameWrapper>
                    <NickName>{comment.writer.nickname}</NickName>
                    <UpdateAt>{formatTimeSince(comment.updatedAt)}</UpdateAt>
                  </NicknameWrapper>
                </ProfileWrapper>
                <Divider />
              </div>
            ))}
          </CommentListContainer>
          <ButtonWrapper>
            <ReturnButton onClick={handleReturnClick}>
              목록으로 돌아가기
              <BackIconImg src={BackIcon} alt="돌아가기 아이콘" />
            </ReturnButton>
          </ButtonWrapper>
        </>
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
const Logo = styled.img``;

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

const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 140px;

  //모바일
  @media (max-width: 767px) {
    padding: 3px 5px;
  }
  //테블릿
  @media (max-width: 1200px) {
    padding: 20px 30px;
  }
`;

const NickName = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: left;
  color: #4b5563;
`;
const ProfileImg = styled.img``;
const Content = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const UpdateAt = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  text-align: left;
  color: #9ca3af;
  padding-top: 5px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 140px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0;
`;

export default CommentList;
