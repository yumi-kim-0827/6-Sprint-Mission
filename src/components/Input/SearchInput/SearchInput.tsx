import SearchIcon from "assets/icon/ic_search.svg";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <StyledSearchInput>
      <input
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <img src={SearchIcon} alt="search-icon" />
    </StyledSearchInput>
  );
}

const StyledSearchInput = styled.div`
  position: relative;

  input {
    border-radius: 12px;
    outline: none;
    border: none;
    width: 100%;
    min-width: 242px;
    height: 42px;
    background-color: var(--cool-gray300);
    text-indent: 44px;
    &::placeholder {
      color: var(--light-gray);
      font-size: 16px;
      font-weight: 400;
    }
  }

  img {
    position: absolute;
    top: 13px;
    left: 20px;
  }
`;
