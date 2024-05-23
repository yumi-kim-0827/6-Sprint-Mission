import { useNavigate } from "react-router-dom";
import Search from "../../assets/icons/ic_search.png";

export default function AllSection() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="all_section_header">
        <h1>전체 상품</h1>

        <div className="all_section_header_nav">
          <div className="search_item">
            <img src={Search} alt="검색 아이콘" />
            <input type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <button className="add_item_button" onClick={()=>{navigate("/additem")}}>상품 등록하기 </button>
          <button className="dropdown_button">최신순</button>
        </div>
      </div>
      <div className="all_items">여기에 아이템을 API로 가져와서 뿌린다.</div>
    </div>
  );
}
