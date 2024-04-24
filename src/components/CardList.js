import style from "../styles/CardList.module.css";
import classNames from "classnames/bind";
import Card from "./Card";

const cn = classNames.bind(style);

const CardList = ({ isBest, products }) => {
  return (
    <ul className={cn("card-list", isBest ? "best-prods" : "all-prods")}>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <Card product={product} />
            </li>
          );
        })}
    </ul>
  );
};

export default CardList;
