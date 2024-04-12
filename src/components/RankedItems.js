import { useState, useEffect } from "react";

import favoriteIcon from "../images/ic_heart.png";

export default function RankedItems({ data, deviceSize }) {
  const [productCount, setproductCount] = useState(1);
  const sortedProducts = data.list.sort(
    (a, b) => b.favoriteCount - a.favoriteCount,
  );

  useEffect(() => {
    if (deviceSize.isMobile) {
      setproductCount(1);
    } else if (deviceSize.isTablet) {
      setproductCount(2);
    } else if (deviceSize.isPC) {
      setproductCount(4);
    }
  }, [deviceSize]);

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-[var(--footer-bg-color)]">
        베스트 상품
      </h1>
      <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {sortedProducts &&
          sortedProducts.slice(0, productCount).map((post) => {
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
                  {post.price}원
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
