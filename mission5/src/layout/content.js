import searchIcon from "../images/ic_search.svg";
import "../index.css";

function Content() {
  return (
    <div className="container">
      <div>
        <div className="label-box">
          <div className="label">베스트 상품</div>
        </div>
        <div className="content-box">베스트 상품 리스트</div>
      </div>
      <div>
        <div className="label-box">
          <div className="label">전체 상품</div>
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
        </div>
        <div className="content-box">전체 상품 리스트</div>
      </div>
    </div>
  );
}

export default Content;
