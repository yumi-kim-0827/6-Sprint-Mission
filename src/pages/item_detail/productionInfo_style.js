import styled from "styled-components";

export const ProductInfoSection = styled.div`
  width: 100%;
  min-height: 48.6rem;
  margin-bottom: 3.2rem;

  display: flex;
  gap: 2.4rem;

  @media (min-width: 769px) and (max-width: 1024px) {
    min-height: 41.8rem;
    margin-bottom: 2.4rem;
    gap: 1.6rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    min-height: 74.4rem;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 2.4rem;
  }
`;

export const ProductImageSection = styled.div`
  width: 48.6rem;
  height: 48.6rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 34rem;
    height: 34rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 34.3rem;
    height: 34.3rem;
  }
`;

export const ProductDetailSection = styled.div`
  width: 48.6rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 34rem;
    height: 41.8rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 34.3rem;
    height: 38.5rem;
  }
`;

export const DetailHeader = styled.div`
  width: 100%;
  height: 10.9rem;
  margin-bottom: 1.6rem;
  border-bottom: 0.1rem solid var(--gray200);

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 2.8rem;
    }
    img {
      cursor: pointer;
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.7rem;
    margin-top: 1.6rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 9rem;
    div {
      h2 {
        font-size: 2rem;
        line-height: 2.3rem;
      }
    }
    h1 {
      font-size: 3.2rem;
      line-height: 3.8rem;
      margin-top: 1.2rem;
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    height: 7.2rem;
    div {
      h2 {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }
    h1 {
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-top: 0.8rem;
    }
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }
`;

export const DetailHead = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;
`;

export const DetailTagSection = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;
export const DetailTag = styled.div`
  padding: 0.6rem 1.6rem;
  border-radius: 26px;
  background-color: var(--coolGray100);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const DetailLikes = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;

  div {
    padding: 4px 12px;
    border-radius: 35px;
    border: 1px solid var(--gray200);
    display: flex;
    gap: 4px;
    align-items: center;

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
    span {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.9rem;
      color: var(--gray500);
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    div {
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
      span {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.9rem;
        color: var(--gray500);
      }
    }
  }
`;
