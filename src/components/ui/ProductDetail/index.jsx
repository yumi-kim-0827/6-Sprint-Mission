import CommentsContainer from "../../container/CommentsContainer";
import ProductPresenterContainer from "../../container/ProductPresenterContainer";
import ReturnButton from "../ReturnButton";
import styles from "./styles.module.css";

function ProductDetail() {
  return (
    <div className={styles.aligner}>
      <ProductPresenterContainer />
      <CommentsContainer />
      <ReturnButton />
    </div>
  );
}

export default ProductDetail;
