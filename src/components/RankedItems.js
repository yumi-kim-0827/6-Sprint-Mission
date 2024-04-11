export default function RankedItems({ data }) {
  return (
    <div>
      <h1>베스트 상품</h1>
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6">
        {data.list &&
          data.list.map((post) => {
            return (
              <li key={post.id}>
                <img src={post.images[0]} alt={post.name} />
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
