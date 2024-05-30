import Kebab from "../Kebab";
import ProductLikes from "../ProductLikes";
import ProductTag from "../ProductTag";
import styles from "./styles.module.css";

function ProductDescription({ product }) {
  return (
    <div className={styles.descriptionLayout}>
      <div>
        <div className={styles.nameAndButtonAligner}>
          <div className={styles.name}>{product.name} 팔아요</div>
          <Kebab />
        </div>
        <div className={styles.price}>{product.price.toLocaleString()}원</div>
        <hr className={styles.line} />
        <div className={styles.introductionLabel}>상품 소개</div>
        <div className={styles.content}>{product.description}</div>
        <div className={styles.introductionLabel}>상품 태그</div>
        <ProductTag className={"tagsLayout"} tags={product.tags} />
      </div>
      <ProductLikes likes={product.favoriteCount} />
    </div>
  );
}

export default ProductDescription;
