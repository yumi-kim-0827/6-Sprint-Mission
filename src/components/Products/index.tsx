import styles from "../styles/Products.module.css";
import { Link } from "react-router-dom";

// function formatDate(value) {
//     const date = new Date(value);
//     return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
// }
type Item = {
  images: string[];
  name: string;
  id: any;
  price: number;
  favoriteCount: number;
};

interface ItemProps {
  item: Item;
}

interface ProductsProps {
  items: Item[];
  counts: number;
}

function BestProductItem({ item }: ItemProps) {
  return (
    <div className={styles.productItemContainer}>
      <span className={styles.bestitemListItemImage}>
        <img src={item.images[0]} alt={item.name} />
      </span>
      <Link className={styles.bestitemListItemTitle} to={`/items/${item.id}`}>
        {item.name}
      </Link>
      <p className={styles.bestitemListItemPrice}>
        {item.price.toLocaleString("ko-KR")}원
      </p>
      <div className={styles.likes}>
        <label className={styles.bestitemListItemLikebutton}>
          <input type="checkbox" className={styles.likebuttonToggle} />
          <span className={styles.likebuttonToggleButton}></span>
        </label>
        <p className={styles.bestitemListItemLikecount}>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function AllProductItem({ item }: ItemProps) {
  return (
    <div className={styles.productItemContainer}>
      <span className={styles.allitemListItemImage}>
        <img src={item.images[0]} alt={item.name} />
      </span>
      <Link className={styles.allitemListItemTitle} to={`/items/${item.id}`}>
        {item.name}
      </Link>
      <p className={styles.allitemListItemPrice}>
        {item.price.toLocaleString("ko-KR")}원
      </p>
      <div className={styles.likes}>
        <label className={styles.allitemListItemLikebutton}>
          <input type="checkbox" className={styles.likebuttonToggle} />
          <span className={styles.likebuttonToggleButton}></span>
        </label>
        <p className={styles.allitemListItemLikecount}>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function BestProducts({ items, counts }: ProductsProps) {
  return (
    <ul className={styles.bestitemList}>
      {items.map((item, index) => {
        if (!(index > counts - 1)) {
          return (
            <li className={styles.bestitemListItem} key={item.id}>
              <BestProductItem item={item} />
            </li>
          );
        }
      })}
    </ul>
  );
}

function AllProducts({ items, counts }: ProductsProps) {
  return (
    <ul className={styles.allitemList}>
      {items.map((item, index) => {
        if (index > counts - 1) {
          return <></>;
        }
        return (
          <li className={styles.allitemListItem} key={item.id}>
            <AllProductItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export { BestProducts, AllProducts };
