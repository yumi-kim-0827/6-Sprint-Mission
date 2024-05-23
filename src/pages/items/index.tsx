import { ChangeEvent, useEffect, useState } from "react";
import "./Items.css";
import ShowBestProducts from "../../components/show-best-products";
import ShowProducts from "../../components/show-products";
import PageButton from "../../components/page-button";
import { getProduct, getBestProduct, getTotalCount } from "../../apis/api";

function Items(): JSX.Element {
  const [products, setProducts] = useState<string[]>([]);
  const [bestProducts, setBestProducts] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState<number>();

  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState<number>(1);

  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);

  interface OrderQuery {
    orderBy: string;
    page: number;
    pageSize: number;
    keyword: string;
  }

  const handleLoad = async (orderQuery: OrderQuery) => {
    const { list } = await getProduct(orderQuery);
    setProducts(list);
  };

  const handleBestLoad = async (pageSize: number) => {
    const { list } = await getBestProduct(pageSize);
    setBestProducts(list);
  };

  const getProducttotalCount = async () => {
    const { totalCount } = await getTotalCount();
    setTotalCount(totalCount);
  };

  const desktop: MediaQueryList = window.matchMedia("(min-width : 1200px");
  const tablet: MediaQueryList = window.matchMedia("(min-width : 768px) and (max-width : 1199px)");

  const handlePageSize = () => {
    const mediaSize = desktop.matches ? "desktop" : tablet.matches ? "tablet" : "mobile";
    const pageSizes = getPageSize(mediaSize);
    const bestPageSizes = getBestPageSize(mediaSize);
    setPageSize(pageSizes);
    setBestPageSize(bestPageSizes);
    setPage(1);
  };

  const getPageSize = (mediaSize: string) => {
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
  const getBestPageSize = (mediaSize: string) => {
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

  function onChangeSelect(value: string) {
    value === "좋아요순" ? setOrderBy("favorite") : setOrderBy("recent");
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    value ? setKeyword(value) : setKeyword("");
  }

  const handlePageNum = () => {
    if (typeof totalCount === "number" && !isNaN(totalCount) && totalCount > 0 && pageSize > 0) {
      const pageNum = Math.ceil(totalCount / pageSize);
      return pageNum;
    }
  };

  const handlePage = (value: number) => {
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

    handlePageSize();

    desktop.addListener(handlePageSize);
    tablet.addListener(handlePageSize);

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
      <PageButton handlePageNum={handlePageNum} handlePage={handlePage} page={page} />
    </div>
  );
}

export default Items;
