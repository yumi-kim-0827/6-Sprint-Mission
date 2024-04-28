import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { sortItemsByOrder } from "../utils/sort";
import { AllProducts } from "./Products";
import { Link } from "react-router-dom";
import styles from "../styles/AllItems.module.css";
import SelectMenu from "./SelectMenu";
import Paging from "./Paging";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#000",
  };
}

function AllItems({ pageSize }) {
  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [loadingError, setLoadingError] = useState(null);
  const [keyword, setKeyword] = useState("");

  const sortedItems = sortItemsByOrder(items, order);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["keyword"].value);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getProducts(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { list } = result;
    setTotalPage(result.totalCount);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ pageSize, order, keyword });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, order, keyword]);

  return (
    <>
      <div className={styles.allitemContainer}>
        <div className={styles.allitemTitle}>
          <h2 className={styles.allitemTitleContent}>
            {window.innerWidth < 1199 ? "판매 중인 상품" : "전체 상품"}
          </h2>
          <div className={styles.allitemTitleFormSearch}>
            <span className={styles.allitemTitleFormSearchImage} />
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                name="keyword"
                className={styles.allitemTitleFormSearchInput}
                placeholder="검색할 상품을 입력해주세요"
              />
            </form>
          </div>
          <Link to="/additem" className={styles.allitemTitleFormButton}>
            상품 등록하기
          </Link>
          <SelectMenu className={styles.SelectBox} setOrder={setOrder} />
        </div>
        <div>
          <AllProducts items={sortedItems} />
        </div>
        {loadingError?.message && <span>{loadingError.message}</span>}
      </div>
      {/* <Paging
        itemsCount={1}
        totalPageCount={totalPage}
        displayCount={pageSize}
        order={order}
        onClick={handleLoad}
      /> */}
    </>
  );
}

export default AllItems;
