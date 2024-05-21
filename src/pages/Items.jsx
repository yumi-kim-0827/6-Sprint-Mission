import { useEffect, useState } from "react";
import "./Items.css";
import ShowBestProducts from "../components/ShowBestProducts";
import ShowProducts from "../components/ShowProducts";
import PageButton from "../components/PageButton";
import { getProduct, getBestProduct, getTotalCount } from "../apis/api";

function App() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState();

  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);

  const handleLoad = async (orderQuery) => {
    const { list } = await getProduct(orderQuery);
    setProducts(list);
  };

  const handleBestLoad = async (pageSize) => {
    const { list } = await getBestProduct(pageSize);
    setBestProducts(list);
  };

  const getProducttotalCount = async () => {
    const { totalCount } = await getTotalCount();
    setTotalCount(totalCount);
  };

  const desktop = window.matchMedia("(min-width : 1200px");
  const tablet = window.matchMedia("(min-width : 768px) and (max-width : 1199px)");

  const handlePageSize = () => {
    const mediaSize = desktop.matches ? "desktop" : tablet.matches ? "tablet" : "mobile";
    const pageSizes = getPageSize(mediaSize);
    const bestPageSizes = getBestPageSize(mediaSize);
    setPageSize(pageSizes);
    setBestPageSize(bestPageSizes);
    setPage(1);
  };

  const getPageSize = (mediaSize) => {
    switch (mediaSize) {
      case "desktop":
        return 10;
      case "tablet":
        return 6;
      case "mobile":
        return 4;
      default:
        return 10;
    }
  };
  const getBestPageSize = (mediaSize) => {
    switch (mediaSize) {
      case "desktop":
        return 4;
      case "tablet":
        return 2;
      case "mobile":
        return 1;
      default:
        return 4;
    }
  };

  function onChangeSelect(value) {
    value === "좋아요순" ? setOrderBy("favorite") : setOrderBy("recent");
  }

  function onChangeInput(e) {
    const value = e.target.value;
    value ? setKeyword(value) : setKeyword("");
  }

  const handlePageNum = () => {
    if (!isNaN(totalCount)) {
      const pageNum = Math.ceil(totalCount / pageSize);
      return pageNum;
    }
  };

  const handlePage = (value) => {
    setPage(value);
  };

  useEffect(() => {
    handleBestLoad(bestPageSize);
  }, [bestPageSize]);

  useEffect(() => {
    handleLoad({ orderBy, page, pageSize, keyword });
  }, [orderBy, page, pageSize, keyword]);

  useEffect(() => {
    getProducttotalCount();

    desktop.addListener(handlePageSize);
    tablet.addListener(handlePageSize);

    handlePageSize();

    return () => {
      desktop.removeListener(handlePageSize);
      tablet.removeListener(handlePageSize);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <ShowBestProducts products={bestProducts} />
        <ShowProducts onChangeSelect={onChangeSelect} onChangeInput={onChangeInput} products={products} />
      </div>
      <PageButton handlePageNum={handlePageNum} handlePage={handlePage} />
    </div>
  );
}

export default App;
