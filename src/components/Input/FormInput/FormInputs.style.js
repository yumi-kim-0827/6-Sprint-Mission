import styled from "styled-components";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";

export const FormInput = styled.input`
  width: 100%;
  height: 56px;
  background-color: var(--input-bg);
  outline: none;
  border: none;
  border-radius: 12px;
  text-indent: 24px;
  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
    font-weight: 400;
  }
`;

export const TextareaInput = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: var(--input-bg);
  padding: 16px 24px;
  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
    font-weight: 400;
  }
`;

export const TagList = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background-color: var(--cool-gray200);
  width: max-content;
  padding: 12px 12px 12px 16px;
  border-radius: 26px;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: var(--cool-gray800);
  user-select: none;
`;

export const StyledXIcon = styled(XIcon)`
  cursor: pointer;
  fill: #9ca3af;

  &:hover {
    fill: var(--blue);
  }
`;
