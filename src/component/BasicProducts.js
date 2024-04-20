import { getItems } from "../Api.js";
import { useState, useEffect, React } from "react";
import ProductList from "./ProductList.js";
import { Link } from "react-router-dom";
import Paging from "./Paging";

function BasicProducts() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);

  const [page, setPage] = useState(1);

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const productsLoad = async (options, perPage) => {
    const { list } = await getItems({ orderBy: options, page: perPage });
    const { totalCount } = await getItems({ pageSize: 12 });
    setTotalCount(totalCount);
    setItems(list);
  };

  useEffect(() => {
    productsLoad(order, page);
  }, [order, page]);

  return (
    <div>
      <div className="basic-product-header">
        <h2>전체 상품</h2>
        <div className="basic-product-header-inner">
          <input placeholder="검색할 상품을 입력해주세요" />
          <Link to="/AddItem">
            <button>상품 등록하기</button>
          </Link>
          <select
            value={order}
            onChange={(e) => handleOrderChange(e.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="basic-items">
        <ProductList items={items} />
        <Paging
          page={page}
          pageSize={12}
          totalCount={totalCount}
          onChange={handlePage}
        />
      </div>
    </div>
  );
}

export default BasicProducts;
