import { Link } from "react-router-dom";
import Styles from "./ItemCard.module.scss";
import icoHeart from "../img/ic_heart.svg";

export function ItemCard({ item }) {
  return (
    <>
      <div className={Styles.imgWrap}>
        <Link to={`/items/${item.id}`} className="link">
          <img
            src={item.images[0]}
            alt={item.name + " 이미지"}
            className={Styles.img}
          />
        </Link>
      </div>
      <div className={Styles.content}>
        <h2 className={Styles.title}>
          <Link to={`/items/${item.id}`} className={Styles.link}>
            {item.description}
          </Link>
        </h2>
        <p className={Styles.price}>{item.price.toLocaleString()}원</p>
        <p className={Styles.favorite}>
          <img src={icoHeart} alt="좋아요" />
          <span>{item.favoriteCount}</span>
        </p>
      </div>
    </>
  );
}
