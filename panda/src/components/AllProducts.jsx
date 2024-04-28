import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/ic_search.png";
import ArrowDownIcon from "../assets/ic_arrow_down.png";
import getItems from "../api/api";
import ItemCard from "./ItemCard";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");

  const fetchData = async ({ orderBy }) => {
    const products = await getItems({ orderBy });
    setData(products.list);
  };

  useEffect(() => {
    fetchData({ orderBy });
  }, [orderBy]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return data;
    }
    return data.filter((item) => {
      return item.name.includes(search);
    });
  };

  const filteredProducts = getFilteredData();

  return (
    <div className="w-7/12 m-auto mt-10">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl grow">전체 상품</h1>
        <input
          value={search}
          onChange={onChangeSearch}
          className="w-96 bg-coolGray100 p-3 rounded-lg"
          placeholder="검색할 상품을 입력해주세요."
        />
        <button className="bg-primaryColor text-white p-3 rounded-lg">
          상품 등록하기
        </button>
        <div className="flex justify-center items-center border border-coolGray400 rounded-xl px-4 py-3">
          <p>최신순</p>
          <img className="w-6 h-6" src={ArrowDownIcon} alt="arrow down icon" />
        </div>
      </div>
      <div className="grid grid-cols-5">
        {filteredProducts?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}
