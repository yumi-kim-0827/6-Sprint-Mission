import { useState } from 'react';
import Input from '@/src/components/Input';

type SearchFormProps = {
  onSearch: (keyword: string) => void;
};

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchKeyword);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Input value={searchKeyword} placeholder="🔍︎ 검색할 상품을 입력해주세요" onChange={handleSearchChange} />
    </form>
  );
}
