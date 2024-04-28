import styled from "styled-components";

export const CommentsSection = styled.div`
  width: 100%;
  min-height: 37.8rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 375px) and (max-width: 768px) {
  }
`;

export const NoComment = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: var(--btn4);
`;

export const CommentSection = styled.div`
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-bottom: 0.1rem solid var(--gray200);
`;

export const CommentContent = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  display: flex;
  justify-content: space-between;
`;

export const CommentDetail = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const CommentDetailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const CommenterIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Commenter = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: var(--btn5);
`;

export const CommentTime = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: var(--btn4);
`;
