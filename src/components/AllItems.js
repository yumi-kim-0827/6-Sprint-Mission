import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { sortItems } from "../utils/sort";
import Products from "./Products";
import { Link } from "react-router-dom";
import styles from "../styles/AllItems.module.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#000",
  };
}

function AllItems({ pageSize }) {
  const allItemsListStyles = {
    list: styles.allitemList,
    listItem: styles.allitemListItem,
    elements: {
      listItemImg: styles.allitemListItemImage,
      listItemTitle: styles.allitemListItemTitle,
      listItemPrice: styles.allitemListItemPrice,
      listItemLikeButton: styles.allitemListItemLikebutton,
      listItemLikeCount: styles.allitemListItemLikecount,
    },
  };

  const [order, setOrder] = useState("recent");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [keyword, setKeyword] = useState("");

  const sortedItems = sortItems(items, order);

  const setDropdown = (e) => {
    if (e.target.parentNode.classList.contains("active")) {
      e.target.parentNode.classList.remove("active");
    } else {
      e.target.parentNode.classList.add("active");
    }
  };
  const handleSelect = (order, e) => {
    e.target.parentNode.parentNode.classList.remove("active");
    e.target.parentNode.previousSibling.innerHTML = e.target.textContent;
    setOrder(order);
  };

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
          <h2 className={styles.allitemTitleContent}>전체 상품</h2>
          <div className={styles.allitemTitleForm}>
            <div className={styles.allitemTitleFormSearch}>
              <span className={styles.allitemTitleFormSearchImage}></span>
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
            {/*<select name="sort-item" id="sort-item" onChange={handleSelect}>*/}
            {/*    <option value="recent">최신순</option>*/}
            {/*    <option value="favorite">좋아요순</option>*/}
            {/*</select>*/}
            <div className={styles.allitemTitleSelectBox}>
              <button
                className={styles.label}
                onClick={(e) => {
                  setDropdown(e);
                }}
              >
                최신순
              </button>
              <ul className={styles.optionList}>
                <li
                  className={styles.optionItem}
                  onClick={(e) => handleSelect("recent", e)}
                >
                  최신순
                </li>
                <li
                  className={styles.optionItem}
                  onClick={(e) => handleSelect("favorite", e)}
                >
                  좋아요순
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Products className={allItemsListStyles} items={sortedItems} />
        </div>
        {loadingError?.message && <span>{loadingError.message}</span>}
      </div>
    </>
  );
}

export default AllItems;
