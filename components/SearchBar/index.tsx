import React, { ChangeEvent, useState } from 'react';

interface SearchBarProps {
  handleSearchItem: (keyword: string) => void;
}

const SearchBar = ({ handleSearchItem }: SearchBarProps) => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchItem(e.target.value);
  };

  return (
    <input
      placeholder="검색할 상품을 입력해주세요"
      onChange={handleChangeInput}
      // value={search}
    />
  );
};

export default SearchBar;
