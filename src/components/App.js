import { getList } from "../api";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

const pageSize = 10;

function App() {
  const [orderBy, setOrderBy] = useState("recent");
  const [items, setItems] = useState([]);
  const [page, setpage] = useState(1);

  const sortedItems = items?.sort((a, b) => b[orderBy] - a[orderBy]);

  const handleNewestClick = () => setOrderBy("recent");
  const handleBestClick = () => setOrderBy("favorite");

  const handleLoad = async (options) => {
    const { list } = await getList(options);

    setItems(list);
    setpage(options.page + 1);
  };

  const handleLoadMore = () => {
    handleLoad({ orderBy, page, pageSize: pageSize });
  };

  useEffect(() => {
    handleLoad({ orderBy, page: 1, pageSize: pageSize });
  }, [orderBy]);

  return (
    <div>
      <h3>전체 상품</h3>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>인기순</button>
      <ProductList items={sortedItems}></ProductList>
      <button onClick={handleLoadMore}>다음</button>
    </div>
  );
}

export default App;
