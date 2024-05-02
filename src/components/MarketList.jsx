function MarketListItem({ item }) {
  return (
    <div>
      <div>
        <h1>{item.name}</h1>
      </div>
    </div>
  );
}

function MarketList({ items }) {
  //items라는 배열을 prop으로 받음
  //map의 콜백함수에서 JSX로 작성한 값을 리턴함
  return (
    <ul>
      {items?.map((item) => {
        return (
          <li key={item.id}>
            <MarketListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default MarketList;
