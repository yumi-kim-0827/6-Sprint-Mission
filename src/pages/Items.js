import { useEffect, useState, useRef } from "react";
import "./Items.css";
import ShowBestProducts from "../components/ShowBestProducts";
import ShowProducts from "../components/ShowProducts";
import PageButton from "../components/PageButton";
import { getProduct, getBestProduct } from "../components/api";

function App() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [selectValue, setSelectValue] = useState("최신순");
  const [totalCount, setTotalCount] = useState();
  const [order, setOrder] = useState({
    order: "recent",
    page: 1,
    pageSize: 10,
  });
  const handleLoad = async (orderQuery) => {
    const { list } = await getProduct(orderQuery);
    setProducts(list);
  };

  const handleBestLoad = async () => {
    const { list } = await getBestProduct();
    setBestProducts(list);
  };

  function onChangeSelect(e) {
    const value = e.target.value;
    setSelectValue(value);
    value === "좋아요순"
      ? setOrder((prevOrder) => ({ ...prevOrder, order: "favorite" }))
      : setOrder((prevOrder) => ({ ...prevOrder, order: "recent" }));
  }

  const getSelectValue = (value) => {
    return value;
  };

  function onChangeInput(e) {
    const value = e.target.value;
    value === ""
      ? setOrder((prevOrder) =>
          selectValue === "좋아요순" ? { ...prevOrder, order: "favorite" } : { ...prevOrder, order: "recent" }
        )
      : setOrder((prevOrder) => ({ ...prevOrder, order: value }));
  }

  const getTotalCount = async () => {
    const { totalCount } = await getBestProduct();
    setTotalCount(totalCount);
  };

  const handlePageNum = () => {
    if (!isNaN(totalCount)) {
      const pageNum = Math.ceil(totalCount / order.pageSize);
      return pageNum;
    }
  };

  const handlePage = (value) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      page: value,
    }));
  };

  useEffect(() => {
    handleLoad(order);
    getTotalCount();
  }, [order]);

  useEffect(() => {
    handleBestLoad();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <ShowBestProducts products={bestProducts} />
        <ShowProducts
          onChangeSelect={onChangeSelect}
          onChangeInput={onChangeInput}
          products={products}
          getSelectValue={getSelectValue}
        />
      </div>
      <PageButton handlePageNum={handlePageNum} handlePage={handlePage} />
    </div>
  );
}

export default App;
