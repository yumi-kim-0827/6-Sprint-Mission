import styled from 'styled-components';

export const Division = styled.div`
  max-width: 1200px;
  border: 1px solid var(--gray-200);

  margin-top: 32px;
  margin-bottom: 24px;
`;

export const Inquiry = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;

    color: var(--gray-900);
  }

  & textarea {
    border-radius: 12px;
    border: none;

    padding-block: 16px;
    padding-inline: 24px;
    margin-block: 16px;

    background-color: var(--gray-100);

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  & button {
    width: 88px;
    margin-left: auto;
  }
`;

export const EmptyComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 200px;
    height: 200px;
  }

  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    color: var(--gray-400);
  }
`;

export const Comment = styled.div`
  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

    color: var(--gray-800);

    margin-block: 24px;
  }
`;

export const CommentUser = styled.div`
  display: flex;
  gap: 8px;

  & img {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    & span:nth-child(1) {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;

      color: var(--gray-600);
    }

    & span:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;

      color: var(--gray-400);
    }
  }
`;

export const BackButton = styled.button`
  background-color: var(--blue-primary);

  margin: 40px auto 250px;
  padding: 12px 71px;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;

  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
