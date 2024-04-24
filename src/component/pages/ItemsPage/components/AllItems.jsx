import React, { useEffect, useState } from "react";
import { getItems } from "../../../../api/api";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../../../assets/ic_search.svg";
import ItemCard from "./ItemCard";
import ItemSort from "../../../UI/ItemSort";

function AllItems() {
  const [orderBy, setOrderBy] = useState("recent"); //정렬 방식 지정 (recent:최신, favorite: 좋아요 개수)
  const [products, setProducts] = useState([]); // 상품 목록 저장 변수. []
  const [page, setPage] = useState(1); // 현재 페이지 번호 알려줌
  const [searchTerm, setSearchTerm] = useState("");

  const PageSize = 10; //페이지사이즈 10 지정

  const handleRecent = () => {
    //최신순으로 정렬
    setOrderBy("recent");
  };

  const hanldeFavorite = () => {
    //좋아요순으로 정렬
    setOrderBy("favorite");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // 검색어 변경 이벤트 처리
  };

  const hanldeLoad = async (options) => {
    //상품 목록 로딩 및 페이지네이션
    const { list } = await getItems(options);
    if (options.page === 1) {
      //첫번쨰 페이지의 경우
      setProducts(list); //상품 목록을 덮어씀. 상품 목록이 []이므로 가장 처음 불러오는 것
    } else {
      //아닐 경우
      setProducts([...products, ...list]); //저장된 상품 목록 뒤에 새로 불러온 상품을 추가
    }
    setPage(options.page + 1);
    //페이지 번호를 언제나 업데이트하여 첫번째에만 list를 새로 덮어쓰는 걸로
  };

  const handleLoadMore = async () => {
    //페이지네이션에서 다음 페이지 버튼 클릭 시
    setPage((prev) => prev + 1); //페이지 번호 증가
    await hanldeLoad({ page, pageSize: PageSize, orderBy }); //다음 페이지 상품 목록 불러오기
  };

  useEffect(() => {
    const initialPage = 1;
    setPage(initialPage);
    hanldeLoad({ page: initialPage, pageSize: PageSize, orderBy });
  }, [orderBy]); // orderBy를 의존성 배열에 추가

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">판매 중인 상품</h1>
        <Link to="/additem" className="loginLink button">
          상품 등록하기
        </Link>
      </div>
      <div className="allItemsSectionHeader">
        <div className="searchBarWrapper">
          <SearchIcon />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해 주세요"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="sortDropdownTriggerButton">
          <ItemSort orderRecent={handleRecent} orderFavorite={hanldeFavorite} />
        </div>
      </div>

      <div className="allItemsCardSection">
        {filteredProducts.map((item) => (
          <div key={`market-item-${item.id}`}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>

      <div onClick={handleLoadMore}> 더 불러오기</div>
    </div>
  );
}

export default AllItems;
