import React, { useState } from "react";

interface SearchBarProps {
  keyword: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    keyword(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목 검색"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBar;
