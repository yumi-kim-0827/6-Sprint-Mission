import { useState } from 'react';

export default function SearchForm({ onSearch }: any) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchKeyword);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input value={searchKeyword} onChange={handleSearchChange} placeholder="🔍︎ 검색할 상품을 입력해주세요" />
    </form>
  );
}
