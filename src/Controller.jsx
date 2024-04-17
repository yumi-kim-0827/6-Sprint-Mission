import "./Controller.css";
import searchIcon from "./images/ic_search.svg";

function Controller() {
  return (
    <div className="control-box">
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
      <div className="enterButton-box">
        <button className="button enterButton">상품 등록하기</button>
      </div>
      <div className="sortButton">최신순</div>
    </div>
  );
}

export default Controller;
