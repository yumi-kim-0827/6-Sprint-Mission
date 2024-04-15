import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api";
import { sortItems } from "../../utils/sort";
import Products from "../Products/Products";
import { Link } from "react-router-dom";
import "./AllItems.css";
// import Paging from "../Common/Paging";

function AllItems({ pageSize }) {
  const allItemsListStyles = {
    list: "allitem-list",
    listItem: "allitem-list--item",
    elements: {
      listItemImg: "allitem-list--item__image",
      listItemTitle: "allitem-list--item__title",
      listItemPrice: "allitem-list--item__price",
      listItemLikeButton: "allitem-list--item__likebutton",
      listItemLikeCount: "allitem-list--item__likecount",
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
      <div className="allitem-container">
        <div className="allitem-title">
          <h2 className="allitem-title__content">전체 상품</h2>
          <div className="allitem-title__form">
            <div className="allitem-title__form--search">
              <span className="allitem-title__form--search_image"></span>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  name="keyword"
                  className="allitem-title__form--search_input"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </form>
            </div>
            <Link to="/additem" className="allitem-title__form--button">
              상품 등록하기
            </Link>
            {/*<select name="sort-item" id="sort-item" onChange={handleSelect}>*/}
            {/*    <option value="recent">최신순</option>*/}
            {/*    <option value="favorite">좋아요순</option>*/}
            {/*</select>*/}
            <div className="allitem-title__select_box">
              <button
                className="label"
                onClick={(e) => {
                  setDropdown(e);
                }}
              >
                최신순
              </button>
              <ul className="optionList">
                <li
                  className="optionItem"
                  onClick={(e) => handleSelect("recent", e)}
                >
                  최신순
                </li>
                <li
                  className="optionItem"
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
