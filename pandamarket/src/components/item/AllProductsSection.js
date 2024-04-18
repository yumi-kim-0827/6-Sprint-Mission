import { useEffect, useState } from "react";
import Button from "../Button";
import "../item/AllProductsSection.css";
import ProductCard from "./ProductCard";
import { getProductsInfo } from "./api";

function AllProductsSection({ size }) {
  const [allProducts, setAllProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  console.log(
    `페이지 새로 고침발생! 제품:${allProducts.length} 정렬:${order} 검색:${keyword}`
  );
  //페이지 사이즈 확인
  let pageSize = 0;
  if (size.width >= 1200) {
    pageSize = 10;
  } else if (size.width >= 768) {
    pageSize = 6;
  } else if (size.width >= 375) {
    pageSize = 4;
  }
  // 서버에서 배열 받아옴
  const handleLoad = async (query) => {
    const { list } = await getProductsInfo(query);
    setAllProducts(list);
  };

  const handleKeywordChange = (e) => {
    const word = e.target.value;
    setKeyword(word);
  };
  // keyword가 set될때 마다 get요청을 보내서 문
  useEffect(() => {
    handleLoad({ pageSize: pageSize, orderBy: order, keyword: keyword });
  }, [order, pageSize, keyword]);

  function DropDown() {
    const sort = {
      좋아요순: "favorite",
      최신순: "recent",
    };
    const onChangeOrder = (e) => {
      const text = e.target.value;
      const switchOrder = sort[text];
      setOrder(switchOrder);
    };

    return (
      <select
        value={order === "recent" ? "최신순" : "좋아요순"}
        onChange={onChangeOrder}
      >
        <option>최신순</option>
        <option>좋아요순</option>
      </select>
    );
  }

  return (
    <div className="allProductsSection">
      <div className="productsToolbar">
        <h1>전체 상품</h1>
        <div className="tool-container">
          <input
            onChange={handleKeywordChange}
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            name="keyword"
          ></input>
          <Button>상품등록하기</Button>
          <DropDown />
        </div>
      </div>

      <div className="allProducts">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} category="all" />
        ))}
      </div>
    </div>
  );
}

export default AllProductsSection;
