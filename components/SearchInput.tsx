import styled from "styled-components";
import BaseInput from "./BaseInput";
import SearchIcon from "@/public/images/ic_search.svg";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (value: string) => void;
}

const SearchInput = ({
  className = "",
  placeholder,
  onChange,
  onKeyDown,
}: SearchInputProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && onKeyDown) {
      const target = e.target as HTMLInputElement;
      onKeyDown(target.value);
    }
  };

  return (
    <StyledSearchInput className={className}>
      <StyledIcon />
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  position: relative;
  min-width: 294px;
  width: 100%;
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
