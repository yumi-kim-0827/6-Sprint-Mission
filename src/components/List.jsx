import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import ListItems from "./ListItems";
import "./../css/List.css";

function List({ title, order, limit, gridCol, isOrderChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState();

  const getItems = async ({ order, limit }) => {
    let result;
    try {
      setIsLoading(true);
      result = await getProducts({ order, limit });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
    const { totalCount, list } = await result;
    setItems(list);
  };

  // 데이터 가져오기
  useEffect(() => {
    getItems({ order, limit });
  }, [order, limit]);

  const OrderNav = () => {
    return (
      <form className="OrderNav">
        <input type="text" placeholder="검색할 상품을 입력해주세요" />
        <button>상품 등록하기</button>
        <select>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </form>
    );
  };

  return (
    <div className="List">
      <div className="List__head">
        <h3 className="List__title">{title}</h3>
        {isOrderChange && <OrderNav />}
      </div>
      <ListItems items={items} gridCol={gridCol} />
    </div>
  );
}

export default List;
