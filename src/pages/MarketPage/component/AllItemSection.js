import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

function AllItemSection() {
  return (
    <div>
      <div className="allItemSectionHeader">
        <h1>전체 상품</h1>

        <div>
          <SearchIcon />
          <input
            placeholder="검색할 상품을 입력해주세요"
            className="search-input"
          ></input>
        </div>

        <Link to="/additem" className="addItemLink">상품 등록하기</Link>
        <div>상품 드롭다운</div>
      </div>

      <div>상품 10개 나열</div>
    </div>
  );
}

export default AllItemSection;
