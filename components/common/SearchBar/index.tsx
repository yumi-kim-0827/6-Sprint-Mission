/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useCallback } from 'react';
import { debounce } from '@/utils/debounce';
import SearchIcon from '@/public/svgs/search-icon.svg';
import style from './style.module.scss';

interface SearchBarProps {
  handleSearchItem: (keyword: string) => void;
}

const SearchBar = ({ handleSearchItem }: SearchBarProps) => {
  const debouncedHandleSearchItem = useCallback(
    debounce((keyword: string) => handleSearchItem(keyword), 300),
    [handleSearchItem]
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearchItem(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <SearchIcon />
      <input
        className={style.input}
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SearchBar;
