import React, { ChangeEvent } from 'react';
import style from '@/styles/SearchBar.module.css';
const SELECT_LIST = [
  { name: '최신순', value: 'recent' },
  { name: '좋아요순', value: 'like' },
];
const SearchBar = ({
  selectOption,
  onChangeHandler,
}: {
  selectOption: string;
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={style.searchBarFrame}>
      <input
        className={style.search}
        placeholder='검색할 상품을 입력해주세요'
      />
      <select
        className={style.filter}
        value={selectOption}
        onChange={onChangeHandler}
      >
        <option value={SELECT_LIST[0].value}>{SELECT_LIST[0].name}</option>
        <option value={SELECT_LIST[1].value}>{SELECT_LIST[1].name}</option>
      </select>
    </div>
  );
};

export default SearchBar;

