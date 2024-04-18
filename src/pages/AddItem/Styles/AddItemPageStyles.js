import styled from "styled-components";

// AddItemPage.js
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeaderTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 33.41px;
  color: var(--main-text-color);
`;

export const SubmitButton = styled.button`
  width: 88px;
  height: 42px;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 19.09px;
  background-color: var(--placeholder-color);
  color: white;

  &:disabled {
    background-color: var(--main-color);
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Wrapper = styled.form`
  width: 1200px;
  margin: 24px auto 170px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding-left: 24px;
  background-color: var(--input-background-color);

  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  padding: 16px 0 0 24px;
  background-color: var(--input-background-color);

  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export const Title = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 21.48px;
color: var(--main-text-color);
margin-bottom: 12px;
`;
