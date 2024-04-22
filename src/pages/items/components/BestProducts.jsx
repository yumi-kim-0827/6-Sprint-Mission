import ItemCard from "../../../components/ItemCard";
import "./BestProducts.css";
import useItemCount from "./useItemCount";

export default function BestProducts({ items }) {
  let count = useItemCount();

  const bestItems = items
    ?.sort((a, b) => b.favoriteCount - a.favoriteCount)
    .filter((item, index) => index < 4);
  //count 4 일때는 mb 사이즈이다.
  //이 때는 아이템 1개만 보여준다.

  return (
    <div className="container-best-products">
      <h1>베스트 상품</h1>
      <div className="item-cards-container">
        {bestItems?.map((item, i) => {
          return count === 4 && i === 0 ? (
            <ItemCard best mb item={item} />
          ) : count === 6 && i < 2 ? (
            <ItemCard best tb item={item} />
          ) : count === 10 ? (
            <ItemCard best pc item={item} />
          ) : null;
        })}
      </div>
    </div>
  );
}
