import ProductDescription from "../ProductDescription";
import ProductImage from "../ProductImage";
import styles from "./styles.module.css";

function ProductPresenter({ product }) {
  return (
    <div className={styles.productPresenter}>
      <ProductImage src={product?.images?.[0]} />
      {product && <ProductDescription product={product} />}
    </div>
  );
}

export default ProductPresenter;
