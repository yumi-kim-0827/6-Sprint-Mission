import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../services/api";
import ItemCard from "./ItemCard";
import PaginationBar from "../../../components/UI/PaginationBar";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 4;
  else if (width < 1280) return 6;
  else return 10;
};

function AllItems() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [pageTotal, setPageTotal] = useState();
  const [itemList, setItemList] = useState([]);
  const [isOrderDrop, setIsOrderDrop] = useState(false);

  const fetchData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setPageTotal(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsOrderDrop(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize);
    };

    window.addEventListener("resize", handleResize);
    fetchData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  const toggleDropdown = () => {
    setIsOrderDrop(!isOrderDrop);
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="all-item-container">
      <div className="all-item-header">
        <h1>전체 상품</h1>
        <div className="input-item-search">
          <input placeholder="검색할 상품을 입력해주세요" />
        </div>
        <Link to="/additem" className="btn-primary">
          상품 등록하기
        </Link>
        <div className="btn-item-sort">
          <button onClick={toggleDropdown}>최신순</button>
          {isOrderDrop && (
            <ul>
              <li onClick={() => handleSortSelection("recent")}>최신순</li>
              <li onClick={() => handleSortSelection("favorite")}>좋아요순</li>
            </ul>
          )}
        </div>
      </div>

      <div className="all-item-list">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`all-item-${item.id}`} />
        ))}
      </div>

      <div className="'all-item-pagination">
        <PaginationBar
          pageTotal={pageTotal}
          activePage={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
export default AllItems;
