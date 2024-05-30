import { ChangeEventHandler, KeyboardEventHandler } from "react";
import Image from "next/image";
import BaseInput from "./BaseInput";
import SearchIcon from "/public/images/ic_search.svg";

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
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && onKeyDown) {
      onKeyDown(e.currentTarget.value);
    }
  };

  return (
    <div className={`relative h-10 w-full min-w-[294px] ${className}`}>
      <div className="absolute left-4 top-2">
        <SearchIcon />
      </div>
      <BaseInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="pl-11"
      />
    </div>
  );
};

export default SearchInput;
