interface SearchProps {
  searchTerm: string;
  onSearchChange: Function;
}

export default function SearchInput({ searchTerm, onSearchChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}
