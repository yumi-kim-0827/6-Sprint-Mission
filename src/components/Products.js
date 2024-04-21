import styles from "../styles/Products.module.css";
// function formatDate(value) {
//     const date = new Date(value);
//     return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
// }

function ProductItem({ item, className }) {
  const {
    listItemImg,
    listItemTitle,
    listItemPrice,
    listItemLikeButton,
    listItemLikeCount,
  } = className;
  return (
    <div className={styles.productItemContainer}>
      <span className={listItemImg}>
        <img src={item.images[0]} alt={item.name} />
      </span>
      <p className={listItemTitle}>{item.name}</p>
      <p className={listItemPrice}>{item.price.toLocaleString("ko-KR")}원</p>
      <div className={styles.likes}>
        <label className={listItemLikeButton}>
          <input type="checkbox" className={styles.likebuttonToggle} />
          <span className={styles.likebuttonToggleButton}></span>
        </label>
        <p className={listItemLikeCount}>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function Products({ items, counts, className }) {
  const { list, listItem, elements } = className;
  return (
    <ul className={list}>
      {items.map((item, index) => {
        if (index > counts - 1) {
          return <></>;
        }
        return (
          <li className={listItem} key={item.id}>
            <ProductItem className={elements} item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
