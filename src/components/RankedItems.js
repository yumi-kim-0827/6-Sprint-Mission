import { useRankedProductCountStore } from "../store/productCountStore";
import useFetchItems from "../api/useFetchItems";
import formatNumber from "../utils/formatNumber";

import favoriteIcon from "../images/ic_heart.png";

export default function RankedItems() {
  // 화면 전환 시 달라지는 베스트 상품 데이터들을 전역적으로 관리하였습니다.
  const rankedProductCount = useRankedProductCountStore();

  // 데이터를 가져오기 위한 옵션입니다.
  const fetchOptions = {
    page: 1,
    pageSize: rankedProductCount,
    orderBy: "favorite",
  };

  // useFetchItems로 데이터를 가져옵니다.
  const { data, isLoading, isError, error } = useFetchItems(fetchOptions);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-[var(--footer-bg-color)]">
        베스트 상품
      </h1>
      <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.list &&
          data.list.map((post) => {
            return (
              <li key={post.id}>
                <img
                  src={post.images[0]}
                  alt={post.name}
                  className="h-80 w-80 rounded-2xl object-fill sm:h-72 sm:w-72"
                />
                <p className="mt-4 text-sm font-medium text-[var(--cool-gray800)]">
                  {post.name} 팝니다
                </p>
                <p className="text-sm font-bold text-[var(--cool-gray800)]">
                  {formatNumber(post.price)}원
                </p>
                <img src={favoriteIcon} alt="favoriteicon" className="inline" />
                <span className="ml-1 text-xs">{post.favoriteCount}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
