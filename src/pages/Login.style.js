import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100vw;
  max-width: 400px;
  margin: 0 auto;

  > h1 {
    display: flex;
    justify-content: center;
    margin: 24px 0;
    img {
      width: 198px;
      height: 66px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 640px;

    > h1 {
      margin: 44px 0;
      img {
        width: 396px;
        height: 132px;
      }
    }
  }
`;

export const SocialLogin = styled.div`
  width: 100%;
  max-width: 400px;

  > div {
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 640px;
    max-width: 640px;
    height: 74px;
    padding: 16px 23px;
    margin-top: 24px;
    background-color: #e6f2ff;
    border-radius: 8px;
    color: var(--color-cool-gray-800);

    span {
      font-weight: 500;
      font-size: 16px;
      color: var(--color-cool-gray-800);
    }
  }
`;

export const NotMember = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 10em;
  font-weight: 500;
  font-size: 15px;
  line-height: 17.9px;
  color: var(--color-cool-gray-800);

  > button {
    margin-left: 8px;
    font-size: 15px;
    color: var(--color-blue);
    text-decoration: underline;
    background-color: transparent;
  }
`;
