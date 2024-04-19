import BestItems from "./BestItems";
import EntireItems from "./EntireItems";
import Nav from "./Nav";
import "../css/App.css";
import { useEffect, useState } from "react";
import { getItems } from "../api";
import PageContext from "../contexts/pageContext";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState("1");
  const [entireItemsPageSize, setEntireItemsPageSize] = useState(
    calculatePageSize()
  );

  function calculatePageSize(type) {
    if (type === "best") {
      if (window.innerWidth >= 1201) {
        return "4";
      } else if (window.innerWidth >= 744) {
        return "2";
      } else {
        return "1";
      }
    } else {
      if (window.innerWidth >= 1201) {
        return "10";
      } else if (window.innerWidth >= 744) {
        return "6";
      } else {
        return "4";
      }
    }
  }

  const handlePageSize = () => {
    setEntireItemsPageSize(calculatePageSize());
  };

  const handleLoad = async (options) => {
    const { list } = await getItems(options);
    setItems(list);
  };

  const loadBestItems = async (options) => {
    const { list } = await getItems(options);
    setBestItems(list);
  };

  useEffect(() => {
    loadBestItems({
      order: "favorite",
      page: "1",
      pageSize: calculatePageSize("best"),
    });
  }, [entireItemsPageSize]); //같이 써도 상관X

  useEffect(() => {
    handleLoad({ order, page, pageSize: entireItemsPageSize });
  }, [order, page, entireItemsPageSize]);

  window.addEventListener("resize", handlePageSize);

  return (
    <>
      <Nav />
      <BestItems className="best-items" items={bestItems} />
      <PageContext.Provider value={{ page, setPage }}>
        <EntireItems
          className="entire-items"
          items={items}
          order={order}
          handleOrder={setOrder}
        />
      </PageContext.Provider>
    </>
  );
}

export default App;
