import { useEffect, useMemo, useState } from "react";
import { getProductsInfo } from "../components/item/api.js";
import AllProductsSection from "../components/item/AllProductsSection.js";
import BestProductsSection from "../components/item/BestProductsSection.js";
import PageNation from "../components/item/PageNation.js";
function Item() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("최신순");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState({
    width: window.innerWidth,
    innerHeight: window.innerHeight,
  });

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
    let nextProducts;
    if (size.width >= 1200) {
      nextProducts = products.slice(0, 4);
    } else if (size.width >= 768) {
      nextProducts = products.slice(0, 2);
    } else if (size.width >= 375) {
      nextProducts = products.slice(0, 1);
    }
    return sortProductsByFavorites(nextProducts);
  }, [products, size.width]);

  const allProducts = useMemo(() => {
    let nextProducts = [];
    if (search === "") {
      nextProducts = [...products];
    } else {
      nextProducts = [...products].filter((product) =>
        product.name.includes(search)
      );
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

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BestProductsSection products={bestProducts} />
      <AllProductsSection
        products={allProducts}
        handleOrder={handleOrder}
        currentOrder={order}
        onChangeSearch={onChangeSearch}
      />
      <PageNation />
    </>
  );
}

export default Item;
