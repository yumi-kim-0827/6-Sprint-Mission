import styled from "styled-components";
import { DescriptionContainer } from "./ItemDetail";

const CommentInputContainer = styled(DescriptionContainer)`
  border-top: 1px solid #e5e7eb;
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
  background-color: #f3f4f6;
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
    color: #9ca3af;
  }
`;

const CommentButton = styled.button`
  background-color: #9ca3af;
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
`;

const Comment = styled.div`
  border-bottom: 1px solid #e5e7eb;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CommentsContainer = styled(DescriptionContainer)`
  img {
    width: 40px;
    height: 40px;
  }

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
  color: #9ca3af;
`;

export default function ItemComments({ comments }) {
  return (
    <>
      <section>
        <CommentInputContainer>
          <label htmlFor="comment">문의하기</label>
          <CommentInput
            id="comment"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <CommentButton>등록</CommentButton>
        </CommentInputContainer>
        <CommentsContainer>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <Comment key={comment.id}>
                  <p>{comment.content}</p>
                  <WriterContainer>
                    <img src={comment.writer?.image} alt="프로필 이미지" />
                    <WriterInfoContainer>
                      <span>{comment.writer?.nickname}</span>
                      <CommentUpdatedAt>{comment.updatedAt}</CommentUpdatedAt>
                    </WriterInfoContainer>
                  </WriterContainer>
                </Comment>
              );
            })
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </CommentsContainer>
      </section>
    </>
  );
}
