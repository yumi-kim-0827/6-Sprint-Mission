import "./AllItems.css";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ItemElement from "./ItemElement";

function AllItems() {
  const [products, setProducts] = useState([]);

  const handleAllProductLoad = async () => {
    let result;
    result = await getProducts({ orderBy: "recent", pageSize: 10 });
    console.log(result);
    setProducts(result.list);
  };

  useEffect(() => {
    handleAllProductLoad();
  }, []);

  return (
    <div className="allItem-area">
      <div className="allItem-nav">
        <h1>전체 상품</h1>
        <div className="product-filter-area">
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
          <button>상품 등록하기</button>
          <button>최신순</button>
        </div>
      </div>
      <div className="allItem-main">
        {products.map(item => {
          return <ItemElement key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default AllItems;
