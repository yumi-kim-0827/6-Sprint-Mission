import React, { useState } from "react";

const SearchBar = ({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
};

export default SearchBar;
