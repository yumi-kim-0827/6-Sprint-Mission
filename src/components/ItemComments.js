import styled from "styled-components";
import { DescriptionContainer, KebabIcon } from "./ItemDetail";
import arrowTurn from "../assets/arrow-turn.svg";
import kebabIcon from "../assets/icon-kebab.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import {
  DARK_GRAY,
  GRAY_200,
  INPUT_COLOR,
  PRIMARY_COLOR,
} from "../constants/color";

export default function ItemComments({ comments }) {
  const [comment, setComment] = useState("");

  const handleChangeComment = ({ target }) => {
    setComment(target.value);
  };

  // 날짜 및 시간 형식 처리
  const getTimeAgo = (updatedAt) => {
    return moment(updatedAt).fromNow();
  };

  return (
    <>
      <section>
        <CommentInputContainer>
          <label htmlFor="comment">문의하기</label>
          <CommentInput
            id="comment"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={handleChangeComment}
          />
          <CommentButton comment={comment}>등록</CommentButton>
        </CommentInputContainer>
        <CommentsContainer>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <Comment key={comment.id}>
                  <KebabIcon src={kebabIcon} />
                  <p>{comment.content}</p>
                  <WriterContainer>
                    <ProfileImg
                      src={comment.writer?.image}
                      alt="프로필 이미지"
                    />
                    <WriterInfoContainer>
                      <span>{comment.writer?.nickname}</span>
                      <CommentUpdatedAt>
                        {getTimeAgo(comment.updatedAt)}
                      </CommentUpdatedAt>
                    </WriterInfoContainer>
                  </WriterContainer>
                </Comment>
              );
            })
          ) : (
            <p>댓글이 없습니다.</p>
          )}
          <ItemListButton>
            <Link to="/items">
              <ItemListButtonContainer>
                <span>목록으로 돌아가기</span>
                <img src={arrowTurn} alt="돌아가기 아이콘" />
              </ItemListButtonContainer>
            </Link>
          </ItemListButton>
        </CommentsContainer>
      </section>
    </>
  );
}

const CommentInputContainer = styled(DescriptionContainer)`
  border-top: 1px solid ${GRAY_200};
  margin-top: 24px;
  position: relative;
  padding-bottom: 58px;

  label {
    margin: 24px 0 16px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const CommentInput = styled.input`
  position: relative;
  border-radius: 12px;
  background-color: ${INPUT_COLOR};
  border: none;
  outline: none;
  height: 104px;
  padding: 16px 24px;
  margin-bottom: 16px;

  &::placeholder {
    position: absolute;
    top: 16px;
    left: 24px;
    font-size: 16px;
    font-weight: 400;
    color: ${DARK_GRAY};
    white-space: pre-wrap;

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 14px;
    }
  }

  &:placeholder-shown {
    button {
      background-color: ${PRIMARY_COLOR};
    }
  }
`;

const CommentButton = styled.button`
  background-color: ${({ comment }) => (comment ? PRIMARY_COLOR : DARK_GRAY)};
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  width: 74px;
  height: 42px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

const Comment = styled.div`
  border-bottom: 1px solid ${GRAY_200};
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

const CommentsContainer = styled(DescriptionContainer)`
  margin-bottom: 60px;

  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const WriterContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`;

const WriterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CommentUpdatedAt = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${DARK_GRAY};
`;

const ItemListButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 240px;
  height: 48px;
  border: none;
  border-radius: 40px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${PRIMARY_COLOR};

  img {
    width: 19px;
    height: 16px;
  }
`;
const ItemListButton = styled.div`
  margin: 40px auto;
`;
