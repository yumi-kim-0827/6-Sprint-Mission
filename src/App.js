import { GetItems } from "./GetItems";
import { GetBestItems } from "./GetBestItems";
import { useEffect, useState } from "react";
import "./App.css";
import Navigator from "./Navigator";
import ItemsAll from "./ItemsAll";
import SearchItem from "./SearchItem";
import EnterItem from "./EnterItem";
import ItemsBest from "./ItemsBest";
import DropdownSort from "./DropdownSort";

function App() {
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortOption = (option) => {
    setOrder(option);
    setShowDropdown(false);
  };

  const handleLoad = async (orderQuery) => {
    const { list } = await GetItems(orderQuery);
    setItems(list);
  };

  const handleLoadBest = async () => {
    const { list } = await GetBestItems();
    setBestItems(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  useEffect(() => {
    handleLoadBest();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Navigator />
      <main className="content-container">
        <section className="products-best">
          <div className="content-label">베스트 상품</div>
          <ItemsBest items={bestItems} />
        </section>
        <section className="products-all">
          <div className="content-label-box">
            <div className="content-label">전체 상품</div>
            <div className="control-box">
              <SearchItem />
              <EnterItem />
              <div className="dropdown-box">
                <button className="dropdown-button" onClick={toggleDropdown}>
                  {order === "recent" ? "최신순" : "좋아요순"}
                </button>
                {showDropdown && (
                  <DropdownSort handleSortOption={handleSortOption} />
                )}
              </div>
            </div>
          </div>
          <ItemsAll items={items} />
        </section>
      </main>
    </>
  );
}

export default App;
