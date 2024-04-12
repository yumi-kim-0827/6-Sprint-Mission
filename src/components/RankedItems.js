import { useState, useEffect } from "react";

export default function RankedItems({ data, deviceSize }) {
  const [productCount, setproductCount] = useState(1);

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
      <h1 className="mb-4 text-xl text-[var(--footer-bg-color)]">
        베스트 상품
      </h1>
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6">
        {data.list &&
          data.list.slice(0, productCount).map((post) => {
            return (
              <li key={post.id}>
                <img
                  src={post.images[0]}
                  alt={post.name}
                  className="object-fill h-72 w-72"
                />
                <p className="text-[var(--cool-gray800)] text-sm">
                  {post.name} 팝니다
                </p>
                <p className="text-[var(--cool-gray800)] text-sm">
                  {post.price}원
                </p>
                <p className="text-xs">{post.favoriteCount}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
