import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import PaginationBar from "../../../components/UI/PaginationBar";
import { getProducts } from "../../../api/itemApi";
import { useState, useEffect } from "react";

const AllItemsSection = () => {
  const [itemList, setItmeList] = useState([]);
  return (
    <div>
      <div>
        <h1>전체 상품</h1>
        <div>
          <input />
          <Link>상품 등록하기</Link>
          <div>
            <button>최신순</button>
            <button>좋아요순</button>
          </div>
        </div>
      </div>
      <div>
        {itemList.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
      <div>
        <PaginationBar />
      </div>
    </div>
  );
};

export default AllItemsSection;
