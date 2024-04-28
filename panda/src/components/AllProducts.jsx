import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/ic_search.png";
import ArrowDownIcon from "../assets/ic_arrow_down.png";
import getItems from "../api/api";
import ItemCard from "./ItemCard";
import Dropdown from "./Dropdown";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [isVisible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!isVisible);
  };

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

  const changeSort = (sortOption) => {
    setOrderBy(sortOption);
    setVisible(!isVisible);
  };
  return (
    <div className="w-7/12 m-auto mt-10">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl grow">전체 상품</h1>
        <div className="relative">
          <img
            src={SearchIcon}
            alt="search"
            className="w-6 h-6 absolute top-3 left-3"
          />
          <input
            value={search}
            onChange={onChangeSearch}
            className="w-96 bg-coolGray100 p-3 pl-10 rounded-lg"
            placeholder="검색할 상품을 입력해주세요."
          />
        </div>

        <button className="bg-primaryColor text-white p-3 rounded-lg">
          상품 등록하기
        </button>
        <div
          onClick={toggleDropdown}
          className="flex justify-center items-center border border-coolGray400 rounded-xl px-4 py-3 relative cursor-pointer"
        >
          {orderBy === "recent" ? "최신순" : "좋아요순"}
          <img className="w-6 h-6" src={ArrowDownIcon} alt="arrow down icon" />
          {isVisible && (
            <div className="absolute top-16">
              <Dropdown onChangeSort={changeSort} />
            </div>
          )}
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
