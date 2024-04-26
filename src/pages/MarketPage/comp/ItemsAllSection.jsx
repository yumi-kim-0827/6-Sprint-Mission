import getItems from "../../../api/getItems";
import { useEffect, useState } from "react";
import SearchItem from "../../../components/SearchItem";
import EnterItemButton from "../../../components/EnterItemButton";
import DropdownSort from "../../../components/DropdownSort";
import ArrowDown from "../../../assets/ic_arrow_down.svg";
import PagiNationBar from "../../../components/PagiNationBar";
import MakeItemList from "./MakeItemList";

const PAGESIZE_MAX = 10;

function ItemsAllSection() {
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [pageNum, setPageNum] = useState("1");

  const queryData = `products?page=${pageNum}&pageSize=${PAGESIZE_MAX}&orderBy=${order}`;

  const handleSortOption = (option) => {
    setOrder(option);
    setShowDropdown(false);
  };

  const handleLoadPage = (NumOfPage) => {
    setPageNum(NumOfPage);
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const data = await getItems(queryData);
        if (data && data.list) {
          setItems(data.list);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleLoad();
  }, [order, pageNum]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <section className="products-all">
        <div className="content-label-box">
          <div className="content-label">전체 상품</div>
          <div className="control-box">
            <SearchItem />
            <EnterItemButton />
            <div className="dropdown-box">
              <button className="dropdown-button" onClick={toggleDropdown}>
                {order === "recent" ? "최신순" : "좋아요순"}
                <img
                  className={
                    showDropdown
                      ? "arrow-down-image reverse"
                      : "arrow-down-image"
                  }
                  src={ArrowDown}
                  alt="정렬버튼"
                />
              </button>
              {showDropdown && (
                <DropdownSort handleSortOption={handleSortOption} />
              )}
            </div>
          </div>
        </div>
        <MakeItemList items={items} />
        <PagiNationBar handlePageNum={handleLoadPage} />
      </section>
    </>
  );
}

export default ItemsAllSection;
