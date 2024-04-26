import styled from "styled-components";

export const InquirySection = styled.div`
  width: 100%;
  min-height: 22.1rem;
  margin-bottom: 2.4rem;
  border-top: 0.1rem solid var(--gray200);
  padding-top: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 375px) and (max-width: 768px) {
    min-height: 21.3rem;
    padding-top: 1.6rem;
    margin-bottom: 1.6rem;
  }
`;

export const Head = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.9rem;
`;

export const TextArea = styled.textarea`
  height: 10.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 1.2rem;
  border: none;
  background-color: var(--coolGray100);

  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const EnrollButton = styled.div`
  text-align: end;

  button {
    padding: 12px 23px;
    background-color: var(--btn1);

    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.9rem;
    border-radius: 0.8rem;
    border: none;
    cursor: pointer;

    &:disabled {
      background-color: var(--btn4);
      cursor: not-allowed;
    }

    @media (min-width: 375px) and (max-width: 768px) {
    font-size: 1.4rem;
  }
  }
`;
