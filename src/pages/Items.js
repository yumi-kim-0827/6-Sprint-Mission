import { useQuery } from "react-query";
import axios from "axios";

import RankedItems from "../components/RankedItems";
import AllItemsList from "../components/AllItemsList";
import Navbar from "../components/Navbar";

const fetchProducts = async () => {
  const response = await axios.get(
    "https://panda-market-api.vercel.app/products",
  );

  return response.data;
};

// 데이터를 react-query를 이용하여 동일한 데이터의 재접근 속도를 높였습니다.
export default function Items() {
  const { data, isLoading, isError, error } = useQuery("posts", fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error : {error.message}</div>;
  }

  // 네비게이션바 + 베스트 상품 + 전체 상품으로 컴포넌트를 나누었습니다.
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-4 my-6 flex flex-col items-center">
          <RankedItems data={data} />
          <AllItemsList data={data} />
        </div>
      </main>
    </>
  );
}
