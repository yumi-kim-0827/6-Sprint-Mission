import searchIcon from "../assets/icon/ic_search.svg";

function SearchBar() {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="검색" />
      <input
        type="text"
        id="keyword"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default SearchBar;
