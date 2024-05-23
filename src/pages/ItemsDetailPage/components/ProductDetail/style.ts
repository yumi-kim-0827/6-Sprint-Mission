import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 16px;

  @media (max-width: 744px) {
    width: 340px;
    height: 340px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h2`
  color: var(--gray-800);

  font-size: 24px;
  font-weight: 600;
  line-height: 29px;

  margin-top: 0;
  margin-bottom: 16px;
`;

export const Price = styled.span`
  color: var(--gray-800);

  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
`;

export const Division = styled.div`
  max-width: 680px;
  border: 1px solid var(--gray-200);
  margin-block: 16px;
`;

export const Description = styled.div`
  margin-bottom: 24px;
  & span {
    color: var(--gray-600);

    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }
  & p {
    color: var(--gray-800);

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

    margin-top: 8px;
  }
`;

export const ItemTag = styled.div`
  & span {
    color: var(--gray-600);

    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }
  & div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    margin-top: 8px;
    margin-bottom: 25px;
    & span {
      color: var(--gray-800);

      background-color: #f3f4f6;
      padding-block: 6px;
      padding-inline: 16px;
      border-radius: 26px;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

export const Favorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: var(--gray-500);

  width: 87px;
  height: 40px;
  border-radius: 35px;
  border: 1px solid var(--gray-200);
  padding-block: 4px;
  padding-inline: 12px;

  margin-top: auto;

  & span {
    margin-bottom: 3px;
  }
`;
