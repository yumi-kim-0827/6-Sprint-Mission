import styled from "styled-components";
import BaseInput from "./BaseInput";
import SearchIcon from "../assets/icon/search.svg?react";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({
  className = "",
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    value = e.target.value;
    onChange(value);
  };

  return (
    <StyledSearchInput className={className}>
      <StyledIcon />
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  position: relative;
  width: 294px;
  height: 42px;
`;

const StyledIcon = styled(SearchIcon)`
  position: absolute;
  top: 9px;
  left: 16px;
`;

const StyledInput = styled(BaseInput)`
  padding: 9px 44px;
`;

export default SearchInput;
