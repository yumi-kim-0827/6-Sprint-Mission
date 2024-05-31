import React, { ChangeEvent, forwardRef } from 'react';
import style from '@/styles/SearchBar.module.css';
const SELECT_LIST = [
  { name: '최신순', value: 'recent' },
  { name: '좋아요순', value: 'like' },
];

interface SearchBarProps {
  selectOption: string;
  onChangeSelectHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      selectOption,
      onChangeSelectHandler,
      onChangeInputHandler,
      onChangeKeyDownHandler,
    },
    ref
  ) => {
    return (
      <div className={style.searchBarFrame}>
        <input
          onKeyDown={onChangeKeyDownHandler}
          ref={ref}
          className={style.search}
          onChange={onChangeInputHandler}
          placeholder='검색할 상품을 입력해주세요'
        />
        <select
          className={style.filter}
          value={selectOption}
          onChange={onChangeSelectHandler}
        >
          <option value={SELECT_LIST[0].value}>{SELECT_LIST[0].name}</option>
          <option value={SELECT_LIST[1].value}>{SELECT_LIST[1].name}</option>
        </select>
      </div>
    );
  }
);

export default SearchBar;

