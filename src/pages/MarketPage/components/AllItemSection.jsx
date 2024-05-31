import { useEffect, useState } from "react";
import { getProduct } from "../../../api/api";
import ItemCard from "./ItemCard";
//전체 상품

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 12;
  }
};

function AllItemSection() {
  const pageFromStorage = Number(sessionStorage.getItem("page")) || 1;
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(pageFromStorage);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [item, setItem] = useState([]);

  // const handleSelection = (option) => {
  //   setItem(option);
  // };

  useEffect(() => {
    sessionStorage.setItem("page", page);

    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("recent", handleResize);

    const fetchDate = async () => {
      const products = await getProduct({ order, page, pageSize });
      setItem(products.list);
    };
    fetchDate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [order, page, pageSize]);

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <h1>전체 상품</h1>
      <div>
        {item?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default AllItemSection;
