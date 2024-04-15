import { useEffect, useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import { getProductsInfo } from "../components/item/api.js";
import AllProductsSection from "../components/item/AllProductsSection.js";
import BestProductsSection from "../components/item/BestProductsSection.js";
function Item() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("최신순");
  const [search, setSearch] = useState("");

  const handleOrder = (e) => {
    console.log(e.target.value);
    const nextOrder = e.target.value;
    setOrder(nextOrder);
  };

  const onChangeSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };
  // respons값 {list, totalCount}
  /* list[0] 요소
  createdAt: "2024-04-11T11:58:07.926Z"
  description: "제닉스 게이밍의자 팔아요 010-1234-1234 연락 부탁드립니다. 택배 거래 합니다"
  favoriteCount: 5
  id: 18
  images: ['https://sprint-fe-project.s3.ap-northeast-2.amazon….com/Sprint_Mission/user/5/1712836642035/bbb.jpeg']
  name: "게이밍 의자"
  ownerId: 5
  price: 60000
  tags: (3) ['의자', '게이밍', '바르셀로나']
  updatedAt: "2024-04-11T12:22:12.1
  */
  const handleLoad = async () => {
    const { list } = await getProductsInfo();
    console.log(getProductsInfo());
    setProducts(list);
  };

  const sortProductsByFavorites = (products) => {
    return [...products].sort((a, b) => b.favoriteCount - a.favoriteCount);
  };

  const sortProductsByNewest = (products) => {
    return [...products].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  };

  const bestProducts = useMemo(() => {
    return sortProductsByFavorites(products);
  }, [products]);

  const allProducts = useMemo(() => {
    let nextProducts = [];
    if (search === "") {
      nextProducts = [...products];
    } else {
      // input 필드에 값이 들오면 필터링하여 product 정렬
      /* 현재 문제점 공백을 제거하여 띄어쓰기 포함까지 검색이 가능하지만
       문자열 시작부터 순회하기 때문에 검색문자열을 포함한 문자열을 찾을 수 없음 */
      nextProducts = [...products].filter((product) => {
        let { name: productName } = product;
        let searchInput = search;
        productName = productName.split(" ").join("").toLowerCase();
        searchInput = searchInput.split(" ").join("").toLowerCase();

        //시작부터 문자열 순회하여 상품리스트 변경
        let check = true;
        for (let i = 0; i < searchInput.length; i++) {
          if (productName[i] !== searchInput[i]) {
            check = false;
            break;
          }
        }
        return check;
      });
    }

    if (order === "좋아요순") {
      return sortProductsByFavorites(nextProducts);
    } else if (order === "최신순") {
      return sortProductsByNewest(nextProducts);
    }
  }, [products, order, search]);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Navigation />
      <BestProductsSection products={bestProducts} />
      <AllProductsSection
        products={allProducts}
        handleOrder={handleOrder}
        currentOrder={order}
        onChangeSearch={onChangeSearch}
      />
    </>
  );
}

export default Item;
