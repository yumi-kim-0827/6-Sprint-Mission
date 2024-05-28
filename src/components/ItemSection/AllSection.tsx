import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/itemsApi";
import ItemCard from "../ItemCard";
import Search from "../../assets/icons/ic_search.png";

export default function AllSection() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);

  // const fetchSortedData = async ({ orderBy}) => {
  //   const products = await getProducts({ orderBy });
  //   setItemList(products.list);
  // };

  return (
    <div>
      <div className="all_section_header">
        <h1>전체 상품</h1>

        <div className="all_section_header_nav">
          <div className="search_item">
            <img src={Search} alt="검색 아이콘" />
            <input type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <button
            className="add_item_button"
            onClick={() => {
              navigate("/additem");
            }}
          >
            상품 등록하기{" "}
          </button>
          <button className="dropdown_button">최신순</button>
        </div>
      </div>
      <div className="all_item_section">
        {/* {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))} */}
      </div>
    </div>
  );
}
