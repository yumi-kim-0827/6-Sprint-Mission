import "../styles/BestList.css";
import heart from "../imgs/heart.svg";

const BestList = ({ items }) => {
  console.log(items);
  console.log([...items]);
  const topList = [...items].sort(
    (a, b) => b["favoriteCount"] - a["favoriteCount"]
  );
  return (
    <section>
      <h1 className="best_title">베스트상품</h1>
      <div className="best_list">
        {topList.slice(0, 4).map((item) => {
          return (
            <div key={item.id}>
              <BestListItems item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const BestListItems = ({ item }) => {
  const { images, name, price, favoriteCount } = item;
  return (
    <div>
      <img src={images} />
      <div className="best_item">
        <p className="best_item_title">{name}</p>
        <p className="best_item_price">{price}원</p>
        <div className="best_item_favorite">
          <img src={heart} />
          <p>{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default BestList;
