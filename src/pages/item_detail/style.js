import styled from "styled-components";

export const Main = styled.div`
  width: 120rem;
  min-height: 123rem;
  margin: 2.4rem auto 15rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 69.6rem;
    min-height: 115.4rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 34.4rem;
    min-height: 145.6rem;
  }
`;

export const BackToListButton = styled.button`
  width: 24rem;
  height: 4.8rem;
  background-color: var(--btn1);

  border-radius: 4rem;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
  font-family: Pretendard;
`;

export const ProductInfoSection = styled.div`
  width: 100%;
  min-height: 41.8rem;
  background-color: red;
  margin-bottom: 2.4rem;

  @media (min-width: 375px) and (max-width: 768px) {
    min-height: 74.4rem;
  }
`;
export const InquirySection = styled.div`
  width: 100%;
  min-height: 22.1rem;
  margin-bottom: 2.4rem;
  border-top: 0.1rem solid var(--gray200);
  padding-top: 2.4rem;
  background-color:blue;

  @media (min-width: 375px) and (max-width: 768px) {
    min-height: 21.3rem;
    padding-top: 1.6rem;
    margin-bottom: 1.6rem;
  }
`;
export const CommentSection = styled.div`
  width: 100%;
  min-height: 37.8rem;
  background-color: green;
  margin-bottom: 4rem;

  @media (min-width: 375px) and (max-width: 768px) {
  }
`;
