const BestList = ({ items }) => {
  const topList = [...items].sort(
    (a, b) => b["favoriteCount"] - a["favoriteCount"]
  );
  return (
    <div>
      <h1>베스트상품</h1>
      {topList.slice(0, 4).map((e) => {
        return (
          <>
            <img src={e.images} />
            <p>{e.name}</p>
            <p>{e.price}</p>
            <p>{e.favoriteCount}</p>
          </>
        );
      })}
    </div>
  );
};

export default BestList;
