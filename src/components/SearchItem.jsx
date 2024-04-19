import searchIcon from "../assets/ic_search.svg";

function SearchItem() {
  return (
    <div className="search-box">
      <input
        type="text"
        id="searchItems"
        className="keywords"
        name="keyword"
        placeholder="검색할 상품을 입력해주세요"
      ></input>
      <button className="search-button">
        <img src={searchIcon} className="search-icon" alt="search" />
      </button>
    </div>
  );
}

export default SearchItem;
