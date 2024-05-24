import getItems from "../../../api/getItems";
import { useEffect, useState } from "react";
import SearchItem from "../../../components/SearchItem";
import EnterItemButton from "../../../components/EnterItemButton";
import DropdownSort from "../../../components/DropdownSort";
import ArrowDown from "../../../assets/ic_arrow_down.svg";
import PagiNationBar from "../../../components/PagiNationBar";
import MakeItemList from "./MakeItemList";
import { Product } from "../../../types";

const PAGESIZE_MAX = 10;

type OrderType = "recent" | "favorite";

function ItemsAllSection() {
  const [order, setOrder] = useState<OrderType>("recent");
  const [items, setItems] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<string>("1");

  const pathName: string = `products?page=${pageNum}&pageSize=${PAGESIZE_MAX}&orderBy=${order}`;

  const handleSortOption = (option: OrderType) => {
    setOrder(option);
    setShowDropdown(false);
  };

  const handleLoadPage = (NumOfPage: string) => {
    setPageNum(NumOfPage);
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const data = await getItems(pathName);
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
      <section className="items-all">
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
