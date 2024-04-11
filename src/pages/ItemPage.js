import "./ItemPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../services/api";
import Item from "../components/Item";
import Button from "../components/Button";
import Searchbar from "../components/Searchbar";
import SortSelectBox from "../components/SortSelectBox";
import Pagination from "../components/Pagination";

function ItemPage() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [bestItemCount, setBestItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // 반응형에 따른 state
    const handleResize = () => {
      let newBestItemCount = 1;
      let newPageCount = 4;

      if (window.innerWidth >= 1200) {
        newBestItemCount = 4;
        newPageCount = 10;
      } else if (window.innerWidth >= 768) {
        newBestItemCount = 2;
        newPageCount = 6;
      }
      setBestItemCount(newBestItemCount);
      setPageCount(newPageCount);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { list } = await getItems();

        // api의 totalCount와 실제 상품 개수가 맞지않아요ㅜ.ㅜ
        const totalCount = list.length;

        const sortedItems = [...list].sort((a, b) => b[order] - a[order]);
        setItems(sortedItems);

        const sortedItemsByFavorite = list.sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );

        const favoriteItemList = sortedItemsByFavorite.slice(0, bestItemCount);
        setBestItems(favoriteItemList);

        const newTotalCount = Math.ceil(totalCount / pageCount);
        setTotalPageCount(newTotalCount);
      } catch (error) {
        console.error("상품 목록을 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchItems(); // UseEffect 내부에서 실행
  }, [pageCount, order, bestItemCount]);

  const handleNewestClick = () => {
    setOrder("createdAt");
  };
  const handleFavoriteClick = () => {
    setOrder("favoriteCount");
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="ItemPage">
        <div className="ItemPage__best-section">
          <span className="ItemPage__title">베스트 상품</span>
          <div className="ItemPage__best-item-list">
            {bestItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="ItemPage__section">
          <div className="ItemPage__title-section">
            <span className="ItemPage__title">판매중인 상품</span>
            <Link to="/additem">
              <Button className="btn-small ItemPage__additem-btn">
                상품 등록하기
              </Button>
            </Link>
            <Searchbar
              placeholder="검색할 상품을 입력해주세요"
              className="ItemPage__search-bar"
              value={inputValue}
              onChange={setInputValue}
            />
            <SortSelectBox
              className="ItemPage__select-box"
              handleNewestClick={handleNewestClick}
              handleFavoriteClick={handleFavoriteClick}
              order={order}
            ></SortSelectBox>
          </div>
          <div className="ItemPage__item-list">
            {/* 페이지네이션 - 서버에서 전부 가져와서 짤라서 보여주는 식으로 구현 */}
            {items
              .map((item) => <Item key={item.id} item={item} />)
              .slice((currentPage - 1) * pageCount, currentPage * pageCount)}
          </div>
        </div>
        <Pagination
          className="ItemPage__pagination"
          totalPages={totalPageCount}
          currentPage={currentPage}
          onPageChange={onPageChange}
        ></Pagination>
      </div>
    </>
  );
}

export default ItemPage;
