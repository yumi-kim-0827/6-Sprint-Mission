import React, { useEffect, useState } from "react";
import { getItems } from "../../../../api/api";
import { Link } from "react-router-dom";
import SortIcon from "../../../../assets/ic_sort.svg";
import SearchIcon from "../../../../assets/ic_search.svg";
import ItemCard from "./ItemCard";

function BestItems() {
  const [products, setProducts] = useState([]); // 상품 목록 저장 변수. []
  const [orderBy, setOrderBy] = useState("recent"); //정렬 방식 지정 (recent:최신, favorite: 좋아요 개수)

  const hanldeLoad = async (options) => {
    //상품 목록 로딩 및 페이지네이션
    setOrderBy("favorite");
    const { list } = await getItems(options);
    if (options.page === 1) {
      //첫번쨰 페이지의 경우
      setProducts(list); //상품 목록을 덮어씀. 상품 목록이 []이므로 가장 처음 불러오는 것
    } else {
      //아닐 경우
      setProducts([...products, ...list]); //저장된 상품 목록 뒤에 새로 불러온 상품을 추가
    }
  };

  useEffect(() => {
    hanldeLoad({ page: 1, pageSize: 4, orderBy });
  }, [orderBy]); // orderBy를 의존성 배열에 추가

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="allItemsCardSection">
        {products.map((item) => (
          <div key={`market-item-${item.id}`}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestItems;
